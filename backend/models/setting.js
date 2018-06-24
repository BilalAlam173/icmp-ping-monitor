const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const settingSchema = new Schema({
    sender_emailId:String,
    sender_emailPassword:String,
    sender_emailHost:String,
    sender_emailPort:Number,
    reciever_emailId:String,
    pingInterval:{ type: Number, default: 5 },
    timePeriod:{ type: Number, default: 720 },
    username:String,
    password:String,
    secondsInHour:{ type: Number, default: 3700 },
});

module.exports = mongoose.model('Setting', settingSchema);
