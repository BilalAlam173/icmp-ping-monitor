const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:String,
    ip:String,
    startTime:String,
    status:Boolean,
});

module.exports = mongoose.model('User', userSchema);
