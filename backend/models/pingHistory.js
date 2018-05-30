const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const pingHistorySchema = new Schema({
  connection:{type: mongoose.Schema.Types.ObjectId, ref: 'Connection'},
  hourlyHistory:[
    {
      timestamp_hour:Date,
      values:mongoose.Schema.Types.Mixed,
    }
  ],
} 
);

module.exports = mongoose.model('PingHistory', pingHistorySchema);
