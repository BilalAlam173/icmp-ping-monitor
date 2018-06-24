/*
@author:Bilal Alam
LATENCY
let a=currenct average latency
l=current ping's latency
n=total pings to count average for
@formula:latest avg value = a+(l-a)/n
*/
module.exports= async function processCtrl() {
  var _imports = {
    netPing: require('net-ping'),
    pingHistoryCtrl: require('./pingHistory'),
    emailCtrl: require('./email'),
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
  let _inc
  let _filterProperties;

//constructor function
init = async () => {

  //creates net ping session
  _netPingSession = _imports.netPing.createSession();

  // get connections
  _connections = await _imports.connectionModel.find({});

  // initialize the main loop
  _timer = setInterval(()=>{_loop()}, _settings.pingInterval * 1000);

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
  _settings.secondsInHour += _settings.pingInterval;

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
      _traverseConnections();
    }
  }
}

_traverseConnections = async ()=> {
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

  //collection of promises returned by each ping sent to each connection
  let promises = [];


  for (let i = 0; i < _connections.length; i++) {

    // promise for ping
    let promise = new Promise((resolve, reject) => {

      // sending ping
      _netPingSession.pingHost(_connections[i].ip, function (error, target, sent, rcvd) {

        //calculating latency
        _connections[i].latency = rcvd - sent;

        // adding connection ping's response into current ping object
        ping.connections.push({
          id: _connections[i]._id,
          latency: _connections[i].latency || 200,
          downTime: _connections[i].downTimePercent || 0,
        });

        //resolve promise with empty data
        resolve();
        // let connection = pingResponseHandler(_connections[i], error, rcvd - sent);
      });
    });

    // push the promise into the collection of promises
    promises.push(promise);
    // _calculateRadical(connection)
  }

  // update history when all promises in the collections are resolved
  Promise.all(promises).then(async () => {
    hour.pings.push(ping);
    _imports.pingHistoryCtrl.upsert(hour);

    // update secondsInHour in settings 
    const settingsUpdated = await _imports.settingModel.updateOne({
      _id: _settings._id
    }, _settings);
  });

  // If a change in average time period is detected, re-calculate the metrics radically with the new time period otherwise calculate incrementally
  // connection = _imports.globalFlags.timePeriodChanged ?
  // await _calculateRadical(connection) :
  // await calculateIncremental(connection, latency);
}

 pingResponseHandler=(connection, error, latency) => {
  // updates total pings counter
  connection.pingCount++;

  connection.latency = error ? 0 : latency;
  connection.status = error ? connection.status : 1;
  // _calculateRadical(connection);
  return connection;

  // return _imports.globalFlags.timePeriodChanged ?
  //   await _calculateRadical(connection) :
  //   await calculateIncremental(connection, latency);
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

_calculateRadical=async (connection)=>{
  _imports.globalFlags.timePeriodChanged = false;

  // gets only the relevant hours according to the selected time period
  const pingHistory = await _imports.pingHistoryCtrl.getRecentHistory(connection._id, _settings.timePeriod, _settings.secondsInHour);
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

calculateIncremental=async (connection, latency)=>{
  let n = connection.pingCount < global.timePeriod ? connection.pingCount : global.timePeriod;

  connection.averagedLatency = Math.floor(connection.averagedLatency + ((latency - connection.averagedLatency) / n));

  let upTime = connection.upTimePercent / 100;
  connection.upTimePercent = Math.floor(upTime + ((connection.status <= 0 ? 0 : 1 - upTime) / n)) * 100;

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


_filterProperties=(connection)=>{
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

_checkForAlert=(connection, global)=>{


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