const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const settingsSchema = new Schema({
    sender_emailId:String,
    sender_emailPassword:String,
    sender_emailHost:String,
    sender_emailPort:Number,
    reciever_emailId:String,
    pingInterval:{ type: Number, default: 5 },
    username:String,
    password:String,
});

module.exports = mongoose.model('Settings', settings);
