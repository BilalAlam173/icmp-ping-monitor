const pingHistoryModel=require('../models/pingHistory');

module.exports = {

    insert: (connectionId) => {

        const pingHistory = new pingHistoryModel({
            timestamp_hour: new Date(),
            values:{},
        });

        // call save funtion on that model's instance
        connection.save((err, connection) => {
            if (err) {
                // return error
                res.status(500).json({
                    message: "something went wrong"
                });
            } else {
                // return success
                res.status(200).json(connection);
            }

        });
    },
}