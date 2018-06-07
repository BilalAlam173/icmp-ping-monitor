const settingsModel = require('../models/setting');
const helperFns = require('../config/helper-fns');
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
                res.sendStatus(200);
            }
        });
    },
    update: async (req, res) => {
        const doc = await settingsModel.find({});
        let timePeriod = req.body.timePeriod ? 
        helperFns.toSeconds(req.body.timePeriod.value,req.body.timePeriod.unit)/doc:timePeriod;
        
        const settings = new settingsModel({
            sender_emailId: req.body.sender_emailId?req.body.sender_emailId:doc.sender_emailId,
            sender_emailPassword: req.body.sender_emailPassword?req.body.sender_emailPassword:doc.sender_emailPassword,
            sender_emailHost: req.body.sender_emailHost?req.body.sender_emailHost:doc.sender_emailHost,
            sender_emailPort: req.body.sender_emailPort?req.body.sender_emailPort:doc.sender_emailPort,
            reciever_emailId: req.body.reciever_emailId?req.body.reciever_emailId:doc.reciever_emailId,
            pingInterval: req.body.pingInterval?req.body.pingInterval:doc.pingInterval,
            timePeriod:timePeriod,
            username: req.body.username?req.body.username:doc.username,
            password: req.body.password?req.body.password:doc.password
        });
        settingsModel.findByIdAndUpdate(doc[0]._id,req.body, (err, doc) => {
            if (err) {
                res.sendStatus(500);
            } else {
                res.sendStatus(200);
            }
        });
    },
    changePingInterval: (req, res) => {
        if (req.body.value || req.body.unit) {
            let global = require('../config/global');
            let intervalInSeconds = helperFns.toSeconds(req.body.value, req.body.unit)
            if (intervalInSeconds) {
                global.pingInterval = intervalInSeconds;
                global.pingIntervalChanged = true;
                res.sendStatus(200);
            } else {
                res.sendStatus(500).json({
                    message: 'incorrect data provided',
                });
            }

        }
    }
}