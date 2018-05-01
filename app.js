

// // require installed packages
 const mongoose = require('mongoose');
const express = require('express');
const mongoUrl= 'mongodb://admin:valleyforge16740@ds159033.mlab.com:59033/icmp-ping-monitor';
const port= process.env.PORT||80;
const path = require('path');
const request = require ("request");
var target = 'http://192.168.10.6';
setInterval(function(){
    request(target, function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
});

},5000)


// attempt to establisth connection with the server
mongoose.connect(mongoUrl);

// get the connection's instance
const dbConnection = mongoose.connection;

// bind events on connection's instance
dbConnection.on('error', function(){
console.log('Could not connect to mongodb');
});
dbConnection.once('open', function() {
  console.log('connected to mongodb');
});

// initiate express
const app = express();

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/public/index.html'));
})

// start a server on port 3000
app.listen(port,function(){
    console.log('server up and running at port '+port);
})

