// // require installed packages
const mongoose = require('mongoose');
const express = require('express');
const mongoUrl = 'mongodb://admin:valleyforge16740@ds159033.mlab.com:59033/icmp-ping-monitor';
const port = process.env.PORT || 80;
const path = require('path');
const request = require("request");
const bodyParser = require('body-parser');
const ctrl = require('./controller');
const netPing = require('net-ping');
let pingInterval = 5000;
let fetchInterval = 5;
let timer = null;


var target = 'http://192.168.10.6';


// attempt to establisth connection with the server
mongoose.connect(mongoUrl);

// get the connection's instance
const dbConnection = mongoose.connection;

// bind events on connection's instance
dbConnection.on('error', function () {
  console.log('Could not connect to mongodb');
});
dbConnection.once('open', function () {
  console.log('connected to mongodb');
});

// initiate express
const app = express();

app.use('/', express.static('dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

timer = setInterval(polling, pingInterval)

function polling() {
  console.log('ping initiated after the interval of ' + pingInterval/1000 + ' seconds')
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
  var session = netPing.createSession();

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
  ctrl.notify(user, function(info, error){
    console.log('asdasd')
    if (info) {
      console.log(info)
    }
  })

}

app.post('/user', ctrl.insert);
app.get('/user', ctrl.get);
app.delete('/user/:id', ctrl.delete);
app.put('/user/:id', ctrl.update);
app.put('/user/ping/:time', function (req, res) {
  pingInterval = req.params.time * 1000;
  if (timer) {
    clearInterval(timer);
    timer = setInterval(polling, pingInterval);
  }
  res.json(pingInterval / 1000);
});
app.put('/user/fetch/:time', function (req, res) {
  fetchInterval = req.params.time;
  res.json(fetchInterval);
});
app.get('/user/ping', function (req, res) {
  res.json(pingInterval / 1000);
});
app.get('/user/fetch', function (req, res) {
  res.json(fetchInterval);
});

// start a server on port 3000
app.listen(port, function () {
  console.log('server up and running at port ' + port);
})