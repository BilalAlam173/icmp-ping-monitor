/*
@author:Bilal Alam
*/
module.exports = async function processCtrl() {
  var _imports = {
    netPing: require('net-ping'),
    pingHistoryCtrl: require('./pingHistory'),
    emailCtrl: require('./email'),
    connectionCtrl: require('../controllers/connection'),
    connectionModel: require('../models/connection'),
    pingHistoryModel: require('../models/pingHistory'),
    settingModel: require('../models/setting'),
    globalFlags: require('../config/global'),
    helperFns: require('../config/helper-fns'),
  }
  let _settings = await _imports.settingModel.findOne().sort({
    field: 'asc',
    _id: 1
  }).limit(1);
  let _timer = {};
  let _connections = [];
  let _netPingSession = {};
  let init;
  let _loop;
  let _checkForAlert;
  let _calculateRadical;
  let _calculateIncremental;
  let _filterProperties;

  //constructor function
  init = async () => {

    //creates net ping session
    _netPingSession = _imports.netPing.createSession();

    // get connections
    _connections = await _imports.connectionModel.find({});

    // initialize the main loop
    _timer = setInterval(() => {
      _loop()
    }, _settings.pingInterval * 1000);

  }
  init();

  // the main loop
  _loop = async () => {

    console.log('ping initiated after the interval of ' + _settings.pingInterval + ' seconds')

    // import the globals and settings
    _imports.globalFlags = require('../config/global');
    _settings = await _imports.settingModel.findOne().sort({
      field: 'asc',
      _id: 1
    }).limit(1);

    // if a new connection is added in the system, fetches the connections collection again
    if (_imports.globalFlags.isNewConnectionAdded) {
      _connections = await _imports.connectionModel.find({});
      _imports.globalFlags.isNewConnectionAdded = false;
    }

    // re initialize the loop if a change in pingInterval is detected
    if (_connections.length > 0) {
      if (_imports.globalFlags.pingIntervalChanged) {
        _imports.globalFlags.pingIntervalChanged = false;
        clearInterval(_timer);
        init();
      } else {
        await _traverseConnections();
      }
    }
  }

  _traverseConnections = async () => {
    // create new hour object if current hour object has completely elapsed otherwise get current hour object
    let hour = {};
    if (_settings.secondsInHour > (3600 - _settings.pingInterval)) {
      hour = {
        timestamp_hour: new Date(),
        pings: [],
      }
      _settings.secondsInHour = 0;
    } else {
      hour = await _imports.pingHistoryCtrl.getLastHour();
    }

    //Current ping object
    let ping = {
      second: _settings.secondsInHour,
      connections: [],
    }
    _settings.secondsInHour += _settings.pingInterval;
    const settingsUpdated = await _imports.settingModel.updateOne({
      _id: _settings._id
    }, _settings);

    //collection of promises returned by each ping sent to each connection
    let promises = [];


    for (let i = 0; i < _connections.length; i++) {

      // promise for ping
      let promise = new Promise((resolve, reject) => {

        // sending ping
        _netPingSession.pingHost(_connections[i].ip, async function (error, target, sent, rcvd) {

          _connections[i].pingCount++;

          //evaluate latency & status 
          _connections[i].latency = error ? 0 : rcvd - sent;
          _connections[i].status = error ? _connections[i].status : 1;


          // adding connection ping's response into current ping object
          ping.connections.push({
            id: _connections[i]._id,
            latency: _connections[i].latency || 200,
            downTime: _connections[i].downTimePercent || 0,
          });

          // calculate averaged metrics , if a change in timePeriod is detected,
          // caluclate radically with the new time else calculate incrementally
          _calculateRadical(_connections[i]);
          _connections[i] = _imports.globalFlags.timePeriodChanged ?
            await _calculateRadical(_connections[i]) :
            await _calculateIncremental(_connections[i]);

          _imports.connectionCtrl.updateSimple(_connections[i], (err, conn) => {
            if (err)
              console.log(err)
          });

          resolve();
        });
      });

      // push the promise into the collection of promises
      promises.push(promise);
    }

    // update history when all promises in the collections are resolved
    Promise.all(promises).then(async () => {
      hour.pings.push(ping);
      const updatedHour = await _imports.pingHistoryCtrl.upsert(hour);

      if (!updatedHour) {
        console.log('Error in Updating Hour');
      }



      // const connectionUpdated = await _imports.connectionModel.findByIdAndUpdate({_id:connec})


    });
  }

  async function _sendPing(connection) {


    //   // check if metric values can instigate an email alert
    //   // if (settings[0].senders_emailId && sender_emailPassword && sender_emailHost && reciever_emailId) {
    //   //   connection = await _checkForAlert(connection, global);
    //   // }

    //   // // send alert if above check passes
    //   // if (statusCache !== connection.status && connection.message) {
    //   //   const alert = await _imports.emailCtrl.alert(connection, connection.message, Boolean(connection.status));
    //   // }

    //   // //update the connection
    //   // const connectionUpdated = await _imports.connectionModel.findByIdAndUpdate(connection._id, _filterProperties(connection));
    //   // const pingHistoryUpdated = await _imports.pingHistoryModel.findByIdAndUpdate(connection.pingHistory.id, connection.pingHistory._doc);
    // });
  }

  _calculateRadical = async (connection) => {
    _imports.globalFlags.timePeriodChanged = false;
    _settings = await _imports.settingModel.findOne().sort({
      field: 'asc',
      _id: 1
    }).limit(1);

    // gets only the relevant hours according to the selected time period
    const pingHistory = await _imports.pingHistoryCtrl.getRecentHistory(_settings.timePeriod, _settings.secondsInHour, _settings.pingInterval);
    const n = pingHistory.length;

    let totalPings = pingHistory.reduce((accumulator, x) => accumulator.concat(x.pings), [])
      .map((x) => x.connections.find((x) => x.id == connection.id));
    let totalLatency = totalPings.reduce((accumulator, x) => accumulator + x.latency, 0);
    let totalDownTime = totalPings.reduce((accumulator, x) => accumulator + x.downTime, 0);

    connection.averagedLatency = Math.round(totalLatency / totalPings.length);
    connection.downTimePercent = Math.round(totalDownTime / totalPings.length);
    connection.upTimePercent = (100 - connection.downTimePercent);
    return connection;
  }

  _calculateIncremental = (connection) => {

    /* a=last calculated average latency
     * l=current ping's latency
     * n=total pings to count average for
     * @formula:latest avg value = a+(l-a)/n
     */

    let n = connection.pingCount < _settings.timePeriod ? connection.pingCount : _settings.timePeriod;

    connection.averagedLatency = Math.floor(connection.averagedLatency + ((connection.latency - connection.averagedLatency) / n));

    /* a=last calculated average upTime
     * l=current ping's latency, 0 or 1
     * n=total pings to count average for
     * @formula:latest avg value = a+(l-a)/n
     */
    let upTime = connection.upTimePercent / 100;

    connection.upTimePercent = Math.floor(upTime + ((connection.latency >= 1 ? 1 : 0 - upTime) / n)) * 100;
    connection.downTimePercent = 100 - connection.upTimePercent;

    return connection;
  }

  // function updatePingHistory(connection, latency, downTime) {
  //   if (connection.secondsRemainingInHour < 1) {
  //     let newHour = {
  //       timestamp_hour: new Date(),
  //       pings: [{
  //         second: 0,
  //         connections: [{
  //           id: connection._id,
  //           latency,
  //           downTime,
  //         }]
  //       }],
  //     }
  //     _imports.pingHistoryCtrl.insert(newHour);
  //     _connections.forEach((item, index) => {
  //       _connections[index].secondsRemainingInHour = 3600;
  //     });
  //   } else {
  //     let l = connection.pingHistory.hourlyHistory.length - 1
  //     connection.pingHistory.hourlyHistory[l].values[`${connection.pingsPerHour*global.pingInterval}`] = latency + '-' + connection.downTimePercent;
  //     connection.pingHistory.markModified('hourlyHistory');

  //   }
  // }


  _filterProperties = (connection) => {
    connection = connection.toObject();
    delete connection.name;
    delete connection.ip;
    delete connection.latencyThreshold_pings;
    delete connection.latencyThreshold_Value;
    delete connection.statusThreshold_pings;
    delete connection.downTimePercentThreshold_pings;
    delete connection.downTimePercentThreshold_Value;
    return connection;
  }

  _checkForAlert = (connection, global) => {


    //latency
    if (connection.averagedLatency > connection.latencyThreshold_Value) {
      connection.latencyThreshold_count++;
    } else {
      connection.latencyThreshold_count = 0;
    }

    if (connection.latencyThreshold_count > connection.latencyThreshold_pings) {
      connection.status = 0;
      connection.message = `The averaged latency is above ${connection.latencyThreshold_Value} for ${connection.latencyThreshold_pings*global.pingInterval}s`

    }

    //downtime
    if (connection.downTimePercent > connection.downTimePercentThreshold_Value) {
      connection.downTimePercentThreshold_count++;
    } else {
      connection.downTimePercentThreshold_count = 0;
    }

    if (connection.downTimePercentThreshold_count > connection.downTimePercentThreshold_pings) {
      connection.status = 0;
      connection.message = `The loss percentage is above ${connection.downTimePercentThreshold_Value}% for ${_imports.helperFns.toProperFormat(connection.downTimePercentThreshold_Value*global.pingInterval)}`;
    }
    //status
    if (connection.status < 1) {
      connection.statusThreshold_count++;
    } else {
      connection.statusThreshold_count = 0;
    }

    if (connection.statusThreshold_count > connection.statusThreshold_pings) {
      connection.message = `The IP is constantly down for ${connection.statusThreshold_pings*global.pingInterval}s`;
    }
    return connection;
  }

}