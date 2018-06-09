// // require installed packages
require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const mongoUrl = 'mongodb://root@127.0.0.1:27017/icmp-ping-monitor';
/*APP_MONGO_URL=mongodb://admin:valleyforge16740@ds159033.mlab.com:59033/icmp-ping-monitor*/
const port = process.env.PORT || 3000;
const path = require('path');
const bodyParser = require('body-parser');

module.exports = function(app){
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
// start a server on port 3000
app.listen(port, function () {
    console.log('server up and running at port ' + port);
  })

app.use('/',express.static(path.join(__dirname, '../dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
}