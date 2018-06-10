const connetionModel = require('../models/connection');
const pingHistoryModel = require('../models/pingHistory');
const global = require('../config/global');

// expose a set of operations 
module.exports = {

    insert: async (req, res) => {

        const existingConnection = await connetionModel.findOne({ip: req.body.ip});
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
                        res.send(connection);
                    }
                });
            }
        });

        // call save funtion on that model's instance

    },
    get: (req, res) => {
        connetionModel.findOne({_id:req.params.id}, function (err, doc) {
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
        if(!req.params.id){
            return res
            .status(500)
            .send({
                error: "unsuccessful"
            })
        }
        connetionModel.findByIdAndUpdate(req.params.id, req.body, (err, connection) => {
            if (err) {
                return res
                    .status(500)
                    .send({
                        error: "unsuccessful"
                    })
            }else{
                res.send({
                    success: "success"
                });
            }
        });
    },
    delete: async (req, res) => {
        const connection = await connetionModel.findOne({_id:req.params.id});
        pingHistoryModel.remove({_id:connection.pingHistory},function(err){
            if(err){
                res.sendStatus(500);
            }else{
                connetionModel.remove({
                    _id: req.params.id
                }, function (err) {
                    if (!err) {
                        global.isNewConnectionAdded = true;
                        res.send({id:req.params.id});
                    } else {
                        res.sendStatus(500);
                    }
                });
            }

        });
        
    }
}