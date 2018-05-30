const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const configSchema = new Schema({
    sender_emailId:String,
    sender_emailPassword:String,
    sender_emailHost:String,
    sender_emailPort:Number,
    reciever_emailId:String,
    pingInterval:{ type: Number, default: 5 },
});

module.exports = mongoose.model('Config', configSchema);
