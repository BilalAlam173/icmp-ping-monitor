const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const connectionSchema = new Schema({
    name:String,
    ip:String,
    upTimePercent:Number,
    downTimePercent:Number,
    averagedLatency:{type:Number,default:0},
    latencyThreshold_Value:{type:Number,default:0},//milliseconds
    latencyThreshold_pings:{type:Number,default:0},//no of pings
    statusThreshold_Time:{type:Number,default:0},//seconds
    downTimePercentThreshold_Value:{type:Number,default:0},//percent
    downTimePercentThreshold_pings:{type:Number,default:0},//no of pings
    lastRecordedHistory:Date,
    pingCount:{type:Number,default:0}
});

module.exports = mongoose.model('Connection', connectionSchema);
