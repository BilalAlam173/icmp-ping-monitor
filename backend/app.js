
const express = require('express');
const config = require('./config/config');
const cors= require('cors');
const route = require('./route');
const process=require('./controllers/process');
const app = express();
app.use(function (req, res, next) {
  // res.header("Access-Control-Allow-Origin", "http://ping.elevate.tech/,http://localhost:4200");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "OPTIONS, GET, PUT, POST,DELETE");
  next();
});
var corsOptions = {
  origin: 'http://ping.elevate.tech'
}

config(app);
route(app);
process();

