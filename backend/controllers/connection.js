const connetionModel = require('../models/connection');
const pingHistoryModel = require('../models/pingHistory');
const global = require('../config/global');

// expose a set of operations 
module.exports = {

    insert: async (req, res) => {

        const existingConnection = await connetionModel.findOne({
            ip: req.body.ip
        });
        if (existingConnection) {
            res.status(500).json({
                message: 'The IP address already exists'
            });
            return;
        }

        const connection = new connetionModel({
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
        connection.save((err, connection) => {
            if (err) {
                // return error
                res.status(500).json({
                    message: "something went wrong"
                });
            } else {
                // return success
                global.isNewConnectionAdded = true;
                res.send(connection);
            }
        });
        // call save funtion on that model's instance

    },
    get: (req, res) => {
        connetionModel.findOne({
            _id: req.params.id
        }, function (err, doc) {
            if (!err) {
                res.send(doc);
            } else {
                res.sendStatus(500);
            }
        });
    },
    getAll: (req, res) => {
        connetionModel.find({}, function (err, docs) {
            if (!err) {
                res.send(docs);
            } else {
                res.sendStatus(500);
            }
        });
    },
    update: (req, res) => {
        if (!req.body._id) {
            return res
                .status(500)
                .send({
                    error: "Invalid ID in request paramaters"
                })
        }
        let connection = JSON.parse(JSON.stringify(req.body));
        delete connection._id;
        delete connection.__v;
        connetionModel.findByIdAndUpdate(req.body._id, connection, {
            new: true
        }, (err, connection) => {
            if (err) {
                return res
                    .status(500)
                    .send({
                        error: "something went wrong"
                    })
            } else {
                res.send({
                    connection: connection
                });
            }
        });
    },
    updateSimple: (con, callback) => {
        if (!con._id) {
            if (callback)
                callback(err, null);
            else
                return null
        }
        let connection = JSON.parse(JSON.stringify(con));
        delete connection._id;
        delete connection.__v;
        connetionModel.update({
            _id: con._id
        }, {
            $set: {
                averagedLatency: con.averagedLatency,
                downTimePercent: con.downTimePercent,
                upTimePercent:con.upTimePercent,
                pingCount:con.pingCount,
                latencyThreshold_count:con.latencyThreshold_count,
                statusThreshold_count:con.statusThreshold_count,
                downTimePercentThreshold_count:con.downTimePercentThreshold_count,
                status:con.status,
            }
        }, {
            new: true
        }, (err, connection) => {
            if (err) {
                if (callback)
                    callback(err, null);
                else
                    return null

            } else {
                if (callback)
                    callback(null, connection);
                else
                    return connection
            }
        });
    },
    truncate: async (req, res) => {
        connectionModel.remove({}, function (err) {
            if (!err) {
                res.json({
                    message: 'success'
                });
            }
        });
    },
    delete: async (req, res) => {
        const connection = await connetionModel.findOne({
            _id: req.params.id
        });

        connetionModel.remove({
            _id: req.params.id
        }, function (err) {
            if (!err) {
                global.isNewConnectionAdded = true;
                res.send({
                    id: req.params.id
                });
            } else {
                res.sendStatus(500);
            }
        });

    }
}