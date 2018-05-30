/*
@author:Bilal Alam
LATENCY
let a=currenct average latency
l=current ping's latency
n=total pings to count average for
@formula:latest avg value = a+(l-a)/n
*/
function pollingCtrl() {
  var _module = {
    netPing: require('net-ping'),
    connectionCtrl: require('./connection'),
    pingHistoryCtrl: require('./pingHistory'),
    connectionModel: require('../models/connection'),
    pingHistoryModel: require('../models/pingHistory'),
    global: require('../config/global'),
    timer: {},
    pingInterval: 5,
    connections: [],
    netPingSession: {},
    loop: _loop,
    sendAlerts: _sendAlert,
    sendPing: _sendPing,

  }

  //constructor function
  function init() {
    _module.netPingSession = _module.netPing.createSession();
    _module.timer = setInterval(_module.loop, _module.pingInterval * 1000);
  }
  return init;

  // the main loop
  async function _loop() {
    console.log('ping initiated after the interval of ' + _module.pingInterval + ' seconds')

    let global = require('../config/global');

    if (global.isNewConnectionAdded || _module.connections.length < 1) {
      _module.connections = await _module.connectionModel.find({});
      global.isNewConnectionAdded = false;
    }
    if (_module.connections.length > 0) {
      //ping each connection
      for (var i = 0; i < _module.connections.length; i++) {
        _module.sendPing(_module.connections[i]);
      }
    }
  }
  async function _sendPing(connection) {
    let currentTimeStamp = new Date().now;

    let global = require('../config/global');

    _module.netPingSession.pingHost(connection.ip, async function (error, target, sent, rcvd) {
      connection.pingCount++;
      var latency=0;
      var status=0;
      if (error) {
        //pingfails

      } else {
       latency=rcvd-sent; 
       status=1;
      }
        let n = connection.pingCount < global.timePeriod ? connection.pingCount : global.timePeriod;

        connection.averagedLatency = Math.floor(connection.averagedLatency + ((latency - connection.averagedLatency) / n));

        let upTime = connection.upTimePercent / 100;
        connection.upTimePercent = Math.floor(upTime + ((status - upTime) / n)) * 100;

        connection.downTimePercent = 100 - connection.upTimePercent;

        //update the connection
        const updated = await _module.connectionModel.findByIdAndUpdate(connection._id, connection);
    });
  }

  function _sendAlert(user) {
    console.log('notify')
    ctrl.notify(user, function (info, error) {
      if (info) {
        console.log(info)
      } else {
        console.log(error);
      }
    })

  }
}


module.exports = pollingCtrl();