
const express = require('express');
const config = require('./config/config');
const cors= require('cors');
const route = require('./route');
const polling=require('./controllers/polling');
const app = express();
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://ping.elevate.tech/","localhost:4200");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
var corsOptions = {
  origin: 'http://ping.elevate.tech'
}

config(app);
route(app);
polling();

