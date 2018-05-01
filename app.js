

// // require installed packages
const mongoose = require('mongoose');
const express = require('express');
const mongoUrl= 'mongodb://admin:valleyforge16740@ds159033.mlab.com:59033/icmp-ping-monitor';
const port= process.env.PORT||80;
const path = require('path');
const request = require ("request");
const bodyParser = require('body-parser');
const ctrl = require('./controller');


var target = 'http://192.168.10.6';


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

// app.get('/',function(req,res){
//     res.sendFile(path.join(__dirname+'/public/index.html'));
// })
app.use('/', express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/ping',function(req,res){
  const user = req.body;

    request('http://'+user.ip, function (error, response, body) {
      if(error){
        res.sendStatus(500);
      }else{
        res.sendStatus(response && response.statusCode);
      }
});
});

app.post('/user',ctrl.insert);
app.get('/user',ctrl.get);

// start a server on port 3000
app.listen(port,function(){
    console.log('server up and running at port '+port);
})

