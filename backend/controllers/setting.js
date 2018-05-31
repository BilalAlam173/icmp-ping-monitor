const userModel = require('../models/user');
const helperFns = require('../config/helper-fns');
module.exports = {
    login: (req, res) => {
        const query = {
            username: req.body.email,
            password: req.body.password
        };
        userModel.findOne(query, (err, user) => {
            if (err || !user) {
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
                    message:'incorrect data provided',
                });
            }

        }
    }
}