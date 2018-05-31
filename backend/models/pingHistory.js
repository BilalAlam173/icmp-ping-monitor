const mongoose = require('mongoose');
const global = require('../config/global');

const Schema = mongoose.Schema;

const pingHistorySchema = new Schema({
  hourlyHistory:[
    {
      timestamp_hour:Date,
      interval:{type:Number,default:global.pingInterval},
      values:{type:mongoose.Schema.Types.Mixed,default:{}},
    }
  ],
} 
);

module.exports = mongoose.model('PingHistory', pingHistorySchema);
