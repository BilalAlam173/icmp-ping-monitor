const ctrl = require('./controller');
const express = require('express');
const config = require('./config');
const netPing = require('net-ping');
const cors = require('cors')
const corsOptions = {
  origin: 'http://ping.elevate.tech',
}
let pingInterval = 5000;
let fetchInterval = 5;
let timer = null;
const app = express();


config(app);


timer = setInterval(polling, pingInterval)

function polling() {
  console.log('ping initiated after the interval of ' + pingInterval / 1000 + ' seconds')
  ctrl.getSimple((docs, err) => {
    let users = docs;
    if (users.length > 0) {
      for (var i = 0; i < users.length; i++) {
        ping(users[i]);
      }
    }
  });
}



function ping(user) {
  var options = {
    networkProtocol: netPing.NetworkProtocol.IPv4,
    packetSize: 16,
    retries: 0,
    sessionId: (process.pid % 65535),
    timeout: 2000,
    ttl: 128
};
  let session = netPing.createSession(options);

  session.pingHost(user.ip, function (error, target) {
    console.log(error+'----'+target);
  
    if (error) {
      if (user.status) {
        user.status = false;
        notifyChange(user);
      }
        user.status = false;
        user.startTime = 0;
        ctrl.updateSimple(user._id, user);
        session.close();

    } else {
      if (!user.status) {
        user.status = true;
        notifyChange(user);
        user.startTime = new Date().getTime();
        ctrl.updateSimple(user._id, user);
        session.close();
      }
    }
  });
}

function notifyChange(user) {
  console.log(`${user.ip} notify ${user.status}`);
  // ctrl.notify(user, function (info, error) {
  //   if (info) {
  //     console.log(info)
  //   }
  // })

}
app.post('/user',cors(corsOptions), ctrl.insert);
app.get('/user',cors(corsOptions), ctrl.get);
app.delete('/user/:id',cors(corsOptions), ctrl.delete);
app.put('/user/:id',cors(corsOptions), ctrl.update);
app.put('/user/ping/:time',cors(corsOptions), function (req, res) {
  pingInterval = req.params.time * 1000;
  if (timer) {
    clearInterval(timer);
    timer = setInterval(polling, pingInterval);
  }
  res.json(pingInterval / 1000);
});
app.put('/user/fetch/:time',cors(corsOptions), function (req, res) {
  fetchInterval = req.params.time;
  res.json(fetchInterval);
});
app.get('/user/ping',cors(corsOptions), function (req, res) {
  res.json(pingInterval / 1000);
});
app.get('/user/fetch',cors(corsOptions), function (req, res) {
  res.json(fetchInterval);
});