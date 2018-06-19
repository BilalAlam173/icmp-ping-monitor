/*
@author:Bilal Alam
LATENCY
let a=currenct average latency
l=current ping's latency
n=total pings to count average for
@formula:latest avg value = a+(l-a)/n
*/
function processCtrl() {
  var _module = {
    netPing: require('net-ping'),
    connectionCtrl: require('./connection'),
    pingHistoryCtrl: require('./pingHistory'),
    emailCtrl: require('./email'),
    connectionModel: require('../models/connection'),
    pingHistoryModel: require('../models/pingHistory'),
    settingModel: require('../models/setting'),
    global: {},
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
    sendAlert: _sendAlert,
    sendPing: _sendPing,
    getLatestAvgLatency: _getLatestAvgLatency,
    filterProperties: _filterProperties

  }

  //constructor function
  async function init() {
    _module.global = await _module.settingModel.find({});
    _module.pingsPerHour = (60 * 60) / _module.global[0].pingInterval;
    _module.netPingSession = _module.netPing.createSession();
    _module.timer = setInterval(_module.loop, _module.pingInterval * 1000);
  }
  return init;

  // the main loop
  async function _loop() {
    console.log('ping initiated after the interval of ' + _module.pingInterval + ' seconds')

    let global = require('../config/global');

    if (global.isNewConnectionAdded || _module.connections.length < 1) {
      _module.connections = await _module.connectionModel.find({}).populate('pingHistory');
      _module.pingHistories = await _module.pingHistoryModel.find({});
      global.isNewConnectionAdded = false;
    }
    if (_module.connections.length > 0) {
      //ping each connection
      for (var i = 0; i < _module.connections.length; i++) {
        if (!_module.pingIntervalChanged) {
          _module.sendPing(_module.connections[i]);
        } else {
          _module.pingIntervalChanged = false;
          clearInterval(_module.timer);
          init();
        }
      }
    }
  }

  async function _getLatestAvgLatency(connection) {
    const setting = await _module.settingModel.find({});
    const time = setting[0].timePeriod * setting[0].pingInterval;

    const pingHistory = await _module.pingHistoryCtrl.getSimple(connection, time);
    const n = pingHistory.length;
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

  async function _sendPing(connection) {
    let currentTimeStamp = new Date();

    let global = require('../config/global');

    _module.netPingSession.pingHost(connection.ip, async function (error, target, sent, rcvd) {
      connection.pingCount++;
      const statusCache = connection.status;
      connection.pingsPerHour = connection.pingsPerHour < _module.pingsPerHour ? connection.pingsPerHour + 1 : 0;
      var latency = 0;
      if (error) {
        //pingfails

      } else {
        latency = rcvd - sent;
        connection.status = 1;

      }
      let settings = await _module.settingModel.find({});
      global = settings[0];
      if (_module.globalFlags.timePeriodChanged) {
        _module.globalFlags.timePeriodChanged = false;
        connection = await _module.getLatestAvgLatency(connection);
      }
      let n = connection.pingCount < global.timePeriod ? connection.pingCount : global.timePeriod;

      connection.averagedLatency = Math.floor(connection.averagedLatency + ((latency - connection.averagedLatency) / n));

      let upTime = connection.upTimePercent / 100;
      connection.upTimePercent = Math.floor(upTime + ((connection.status <= 0 ? 0 : 1 - upTime) / n)) * 100;

      connection.downTimePercent = 100 - connection.upTimePercent;

      if (!connection.pingsPerHour || global.pingIntervalChanged) {
        let newHour = {
          timestamp_hour: currentTimeStamp,
          interval: global.pingInterval,
          values: {},
        }
        newHour.values[`${connection.pingsPerHour*global.pingInterval}`] = latency;
        connection.pingHistory.hourlyHistory.push(newHour);
      } else {
        let l = connection.pingHistory.hourlyHistory.length - 1
        connection.pingHistory.hourlyHistory[l].values[`${connection.pingsPerHour*global.pingInterval}`] = latency + '-' + connection.downTimePercent;
        connection.pingHistory.markModified('hourlyHistory');

      }
      if (settings[0].senders_emailId && sender_emailPassword && sender_emailHost && reciever_emailId) {
        connection = await _module.sendAlert(connection, global);
      }

      if (statusCache !== connection.status && connection.message) {
        const alert = await _module.emailCtrl.alert(connection, connection.message, Boolean(connection.status));
      }

      //update the connection
      //  _module.connectionModel.findByIdAndUpdate(connection._id, _module.filterProperties(connection));
       const updatedPingHistory = await _module.pingHistoryModel.findByIdAndUpdate(connection.pingHistory.id, connection.pingHistory._doc);
    });
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

  async function _sendAlert(connection, global) {


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