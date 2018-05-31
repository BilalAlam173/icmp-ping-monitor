'use-strict';
const Connection = require('../models/connection');
const pingHistoryModel = require('../models/pingHistory');
const global = require('../config/global');

require('dotenv').config();


// expose a set of operations 
module.exports = {

    insert: async (req, res) => {

        const existingConnection = await Connection.findOne({
            ip: req.body.ip
        });
        if (existingConnection) {
            res.status(500).json({
                message: 'The IP address already exists'
            });
            return;
        }

        const connection = new Connection({
            name: req.body.name,
            ip: req.body.ip,
            upTimePercent: req.body.upTimePercent,
            downTimePercent: req.body.downTimePercent,
            averagedLatency: req.body.averagedLatency,
            latencyThreshold_Value: req.body.latencyThreshold_Value,
            latencyThreshold_pings: req.body.latencyThreshold_pings,
            statusThreshold_Time: req.body.statusThreshold_Time,
            downTimePercentThreshold_Value: req.body.downTimePercentThreshold_Value,
            downTimePercentThreshold_pings: req.body.downTimePercentThreshold_pings,
        });
        const pingHistory = new pingHistoryModel({
            connection: connection._id
        });

        pingHistory.save((err, pingHistory) => {
            if (err) {
                res.status(500).json({
                    message: "something went wrong"
                });
            } else {
                //alert every component that a new connection has been added
                connection.pingHistory=pingHistory._id
                connection.save((err, connection) => {
                    if (err) {
                        // return error
                        res.status(500).json({
                            message: "something went wrong"
                        });
                    } else {
                        // return success
                        global.isNewConnectionAdded = true;
                        res.status(200).json(connection);
                    }
                });
            }
        });

        // call save funtion on that model's instance

    },
    get: (req, res) => {
        Connection.find({}, function (err, docs) {
            if (!err) {
                res.send(docs);
            } else {
                res.sendStatus(500);
            }
        });
    },
    getSimple: (callback) => {
        Connection.find({}, function (err, docs) {
            if (!err) {
                callback(docs, null);
            } else {
                callback(null, err);
            }
        });
    },
    update: (req, res) => {
        Connection.findByIdAndUpdate(req.params.id, req.body, (err, connection) => {
            if (err) {
                return res
                    .status(500)
                    .send({
                        error: "unsuccessful"
                    })
            };
            res.send({
                success: "success"
            });
        });
    },
    updateSimple: (id, body) => {
        Connection.findByIdAndUpdate(id, body, (err, connection) => {
            if (err) {
                return 0;
            }
            return connection;
        });
    },
    delete: (req, res) => {
        Connection.remove({
            _id: req.params.id
        }, function (err) {
            if (!err) {
                res.sendStatus(200);
            } else {
                res.sendStatus(500);
            }
        });
    }
}

const checkExistingIp = (ip) => {
    Connection.findOne({
        ip: ip
    }, (err, connection) => {
        if (connection) {
            return true;
        } else {
            return false;
        }

    });
}