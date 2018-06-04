const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const connectionSchema = new Schema({
    name:String,
    ip:String,
    upTimePercent:Number,
    downTimePercent:Number,
    status:{type:Number,default:-1},
    averagedLatency:{type:Number,default:0},
    latencyThreshold_Value:{type:Number,default:1000},//milliseconds
    latencyThreshold_pings:{type:Number,default:120},
    latencyThreshold_count:{type:Number,default:0},//no of pings
    statusThreshold_pings:{type:Number,default:12},
    statusThreshold_count:{type:Number,default:0},//no of pings
    downTimePercentThreshold_Value:{type:Number,default:75},//percent
    downTimePercentThreshold_pings:{type:Number,default:120},
    downTimePercentThreshold_count:{type:Number,default:0},//no of pings
    lastRecordedHistory:Date,
    pingCount:{type:Number,default:0},
    pingHistory:{type: mongoose.Schema.Types.ObjectId, ref: 'PingHistory'},
    pingsPerHour:{type:Number,default:-1},
});

module.exports = mongoose.model('Connection', connectionSchema);
