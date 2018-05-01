

// // require installed packages
 const mongoose = require('mongoose');
const express = require('express');
const mongoUrl= 'mongodb://admin:valleyforge16740@ds159033.mlab.com:59033/icmp-ping-monitor';
const port= process.env.PORT||80;
const path = require('path');
const ping = require ("net-ping");
const session = ping.createSession ();
var target = '192.168.10.1';
setInterval(function(){
    session.pingHost (target, function (error, target) {
        if (error)
            console.log (target + ": " + error.toString ());
        else
            console.log (target + ": Alive");
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

