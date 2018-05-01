const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:String,
    ip:String
});

var User = mongoose.model('User', userSchema);
exports.default = User;