const ctrl = require('./controller');
const express = require('express');
const config = require('./config');
const netPing = require('net-ping');
const cors= require('cors');
var session = netPing.createSession();
let pingInterval = 5000;
let fetchInterval = 5;
let timer = null;
const app = express();
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://ping.elevate.tech/");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
var corsOptions = {
  origin: 'http://ping.elevate.tech'
}

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

  session.pingHost(user.ip, function (error, target) {
    if (error) {
      if (user.status) {
        user.status = false;
        user.startTime = 0;
        ctrl.updateSimple(user._id, user);
      }

    } else {
      if (!user.status) {
        notifyChange(user);
        user.status = true;
        user.startTime = new Date().getTime();
        ctrl.updateSimple(user._id, user);
      }
    }
  });
}

function notifyChange(user) {
  console.log('notify')
  ctrl.notify(user, function (info, error) {
    if (info) {
      console.log(info)
    }else{
      console.log(error);
    }
  })

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