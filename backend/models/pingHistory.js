const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const pingHistorySchema = new Schema({
  hourlyHistory:[
    {
      timestamp_hour:Date,
      values:{type:mongoose.Schema.Types.Mixed,default:{}},
    }
  ],
} 
);

module.exports = mongoose.model('PingHistory', pingHistorySchema);
