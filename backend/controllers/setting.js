const settingsModel = require('../models/setting');
const helperFns = require('../config/helper-fns');
const global = require('../config/global');
module.exports = {
    login: (req, res) => {
        const query = {
            username: req.body.username,
            password: req.body.password
        };
        settingsModel.findOne(query, (err, user) => {
            if (err || !user) {
                res.status(500).send('Incorrect username or password.')
            } else {
                res.send(user);
            }
        });

    },
    insert: (req, res) => {
        const settings = new settingsModel({
            sender_emailId: req.body.sender_emailId,
            sender_emailPassword: req.body.sender_emailPassword,
            sender_emailHost: req.body.sender_emailHost,
            sender_emailPort: req.body.ender_emailPort,
            reciever_emailId: req.body.reciever_emailId,
            pingInterval: req.body.pingInterval,
            username: req.body.username,
            password: req.body.password
        });
        settings.save(req.body, (err, doc) => {
            if (err) {
                res.sendStatus(500);
            } else {
                res.send(doc);
            }
        });
    },
    get:async (req,res)=>{
        const settings = await settingsModel.find({});

        if(settings&& settings.length>0){
            res.send(settings[0]);
        }else{
            res.sendStatus(500);
        }
    },
    update: async (req, res) => {
        let temp = await settingsModel.find({});
        const doc = temp[0];
        let timePeriod =req.body.timePeriod?helperFns.toSeconds(req.body.timePeriod.value,req.body.timePeriod.unit):doc.timePeriod;
        const settings = {
            sender_emailId: req.body.sender_emailId?req.body.sender_emailId:doc.sender_emailId,
            sender_emailPassword: req.body.sender_emailPassword?req.body.sender_emailPassword:doc.sender_emailPassword,
            sender_emailHost: req.body.sender_emailHost?req.body.sender_emailHost:doc.sender_emailHost,
            sender_emailPort: req.body.sender_emailPort?req.body.sender_emailPort:doc.sender_emailPort,
            reciever_emailId: req.body.reciever_emailId?req.body.reciever_emailId:doc.reciever_emailId,
            pingInterval: req.body.pingInterval?req.body.pingInterval:doc.pingInterval,
            timePeriod:timePeriod,
            username: req.body.username?req.body.username:doc.username,
            password: req.body.password?req.body.password:doc.password
        };
        if(doc.pingInterval!==req.body.pingInterval){
            global.pingIntervalChanged=true;
        }
        if(doc.timePeriod!==timePeriod){
            global.timePeriodChanged=true;
        }
        settingsModel.findByIdAndUpdate(doc._id,settings, (err, doc) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.send(doc);
            }
        });
    }
}