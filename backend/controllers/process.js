/*
@author:Bilal Alam
LATENCY
let a=currenct average latency
l=current ping's latency
n=total pings to count average for
@formula:latest avg value = a+(l-a)/n
*/
function processCtrl() {
  var imports = {

  }
  var _module = {
    netPing: require('net-ping'),
    connectionCtrl: require('./connection'),
    pingHistoryCtrl: require('./pingHistory'),
    emailCtrl: require('./email'),
    connectionModel: require('../models/connection'),
    pingHistoryModel: require('../models/pingHistory'),
    settingModel: require('../models/setting'),
    settings: {},
    globalFlags: require('../config/global'),
    helperFns: require('../config/helper-fns'),
    timer: {},
    pingInterval: 5,
    pingsPerHour: 0,
    pingsPerHourCounter: 0,
    connections: [],
    pingHistories: [],
    netPingSession: {},
    loop: _loop,
    checkForAlert: _checkForAlert,
    sendPing: _sendPing,
    calculateRadical: _calculateRadical,
    filterProperties: _filterProperties

  }

  //constructor function
  async function init() {

    //calculate how many pings an hour will hold in the system
    // _module.pingsPerHour = (60 * 60) / _module.global[0].pingInterval;

    //creates net ping session
    _module.netPingSession = _module.netPing.createSession();

    // initialize the main loop
    _module.timer = setInterval(_module.loop, _module.pingInterval * 1000);
  }
  return init;

  // the main loop
  async function _loop() {

    console.log('ping initiated after the interval of ' + _module.pingInterval + ' seconds')

    // import the globals and settings
    _module.globalFlags = require('../config/global');
    let temp = await _module.settingModel.find({});
    _module.settings = temp[0];
    _module.settings.secondsInHour += _module.settings.pingInterval;

    // if a new connection is added in the system, fetches the connections collection again
    if (_module.globalFlags.isNewConnectionAdded) {
      _module.connections = await _module.connectionModel.find({}).populate('pingHistory');
      _module.globalFlags.isNewConnectionAdded = false;
    }

    // re initialize the loop if a change in pingInterval is detected
    if (_module.connections.length > 0) {
      if (_module.globalFlags.pingIntervalChanged) {
        _module.pingIntervalChanged = false;
        clearInterval(_module.timer);
        init();
      } else {
        traverseConnections();
      }
    }
  }

  async function traverseConnections() {
    // create new hour object if current hour object has completely elapsed else get current hour object
    let hour = {};
    if (_module.settings.secondsInHour > (3600 - _module.pingInterval)) {
      hour = {
        timestamp_hour: new Date(),
        pings: [],
      }
      _module.settings.secondsInHour = 0;
    } else {
      hour = await _module.pingHistoryCtrl.getLastHour();
    }

    let ping = {
      second: _module.settings.secondsInHour,
      connections: [],
    }
    let promises = [];
    for (let i = 0; i < _module.connections.length; i++) {
      let promise = new Promise((resolve, reject) => {
        _module.netPingSession.pingHost(_module.connections[i].ip, function (error, target, sent, rcvd) {
          _module.connections[i].latency = rcvd - sent;
          ping.connections.push({
            id: _module.connections[i]._id,
            latency: _module.connections[i].latency || 200,
            downTime: _module.connections[i].downTimePercent || 0,
          });
          resolve();
          // let connection = pingResponseHandler(_module.connections[i], error, rcvd - sent);
        });
      });
      promises.push(promise);
      // _module.calculateRadical(connection)
    }
    Promise.all(promises).then(async ()=>{
      hour.pings.push(ping);
      _module.pingHistoryCtrl.upsert(hour);
      const settingsUpdated = await _module.settingModel.updateOne({_id:_module.settings._id},_module.settings);
    });

    // If a change in average time period is detected, re-calculate the metrics radically with the new time period otherwise calculate incrementally
    // connection = _module.globalFlags.timePeriodChanged ?
    // await _module.calculateRadical(connection) :
    // await calculateIncremental(connection, latency);
  }

  function pingResponseHandler(connection, error, latency) {
    // updates total pings counter
    connection.pingCount++;

    connection.latency = error ? 0 : latency;
    connection.status = error ? connection.status : 1;
    // _module.calculateRadical(connection);
    return connection;

    // return _module.globalFlags.timePeriodChanged ?
    //   await _module.calculateRadical(connection) :
    //   await calculateIncremental(connection, latency);
  }

  async function _sendPing(connection) {


    //   // check if metric values can instigate an email alert
    //   // if (settings[0].senders_emailId && sender_emailPassword && sender_emailHost && reciever_emailId) {
    //   //   connection = await _module.checkForAlert(connection, global);
    //   // }

    //   // // send alert if above check passes
    //   // if (statusCache !== connection.status && connection.message) {
    //   //   const alert = await _module.emailCtrl.alert(connection, connection.message, Boolean(connection.status));
    //   // }

    //   // //update the connection
    //   // const connectionUpdated = await _module.connectionModel.findByIdAndUpdate(connection._id, _module.filterProperties(connection));
    //   // const pingHistoryUpdated = await _module.pingHistoryModel.findByIdAndUpdate(connection.pingHistory.id, connection.pingHistory._doc);
    // });
  }

  async function _calculateRadical(connection) {
    _module.globalFlags.timePeriodChanged = false;

    // gets only the relevant hours according to the selected time period
    const pingHistory = await _module.pingHistoryCtrl.getRecentHistory(connection._id, _module.settings.timePeriod, _module.settings.secondsInHour);
    const n = pingHistory.length;
    if (n) {

    }
    const reducerLT = (averagedLatency, item) => {
      for (var key in item) {
        return Number(averagedLatency) + Number(item[key].split('-')[0]);
      }
    }
    const reducerUT = (averagedDownTime, item) => {
      for (var key in item) {
        return Number(averagedLatency) + Number(item[key].split('-')[1]);
      }
    }
    const sumLT = pingHistory.reduce(reducerLT, 0);
    const sumUT = pingHistory.reduce(reducerDT, 0);
    connection.averagedLatency = Math.floor(sumLT / n);
    connection.upTimePercent = Math.floor(sumUT / n);
    return connection;
  }

  function calculateIncremental(connection, latency) {
    let n = connection.pingCount < global.timePeriod ? connection.pingCount : global.timePeriod;

    connection.averagedLatency = Math.floor(connection.averagedLatency + ((latency - connection.averagedLatency) / n));

    let upTime = connection.upTimePercent / 100;
    connection.upTimePercent = Math.floor(upTime + ((connection.status <= 0 ? 0 : 1 - upTime) / n)) * 100;

    connection.downTimePercent = 100 - connection.upTimePercent;
    return connection;
  }

  function updatePingHistory(connection, latency, downTime) {
    if (connection.secondsRemainingInHour < 1) {
      let newHour = {
        timestamp_hour: new Date(),
        pings: [{
          second: 0,
          connections: [{
            id: connection._id,
            latency,
            downTime,
          }]
        }],
      }
      _module.pingHistoryCtrl.insert(newHour);
      _module.connections.forEach((item, index) => {
        _module.connections[index].secondsRemainingInHour = 3600;
      });
    } else {
      let l = connection.pingHistory.hourlyHistory.length - 1
      connection.pingHistory.hourlyHistory[l].values[`${connection.pingsPerHour*global.pingInterval}`] = latency + '-' + connection.downTimePercent;
      connection.pingHistory.markModified('hourlyHistory');

    }
  }


  function _filterProperties(connection) {
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

  async function _checkForAlert(connection, global) {


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
      connection.message = `The loss percentage is above ${connection.downTimePercentThreshold_Value}% for ${_module.helperFns.toProperFormat(connection.downTimePercentThreshold_Value*global.pingInterval)}`;
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


module.exports = processCtrl();