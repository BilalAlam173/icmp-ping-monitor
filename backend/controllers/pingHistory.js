const pingHistoryModel = require('../models/pingHistory');
const settingsModel = require('../models/setting');
connectionModel = require('../models/connection');
const helperFns = require('../config/helper-fns');

module.exports = {


    getLastHour: async () => {
        const lastHour = await pingHistoryModel.findOne().sort({
            field: 'asc',
            _id: -1
        }).limit(1);
        return lastHour;
    },
    upsert: async (hourObj) => {
        if (hourObj._id) {
            let update = await pingHistoryModel.updateOne({
                _id: hourObj._id
            }, hourObj);
            return update;
        } else {
            let hour = new pingHistoryModel(hourObj);
            hour.save((err, hour) => {
                if (!err)
                    return hour;
                else
                    return null;
            });
        }
    },
    truncate: async (req, res) => {
        pingHistoryModel.remove({}, function (err) {
            if (!err) {
                res.json({
                    message: 'success'
                });
            }
        });
    },
    get: async (req, res) => {
        try {
            let timeLeft = req.body.timePeriod;
            let settings = await settingsModel.findOne().sort({
                field: 'asc',
                _id: 1
            }).limit(1);
            let id = req.params.id;
            let secondsInHour = settings.secondsInHour;
            let lastLeft = timeLeft;
            let count = 0;
            while (timeLeft > 0) {
                lastLeft = timeLeft;
                timeLeft -= secondsInHour;
                count++;
                secondsInHour = 3600;
            }
            const totalHours = await pingHistoryModel.find({}, {}, {
                sort: {
                    '_id': -1
                }
            }).limit(count).lean();

            if (totalHours.length == count) {


                let lastHour = totalHours[totalHours.length - 1];

                let n = lastHour.pings.length;

                lastLeft /= settings.pingInterval;

                let required = n - lastLeft

                lastHour.pings = lastHour.pings.slice(required - 1, n - 1)
                totalHours[totalHours.length - 1] = lastHour;
            }


            let totalPings = totalHours.reduce((accumulator, x) => {
                    let pings = x.pings.map((ping) => {
                        let t = new Date(x.timestamp_hour);
                        t.setSeconds(t.getSeconds() + ping.second);
                        ping.second = t;
                        return ping;
                    });
                    return accumulator.concat(pings.reverse())
                }, [])
                .map((x) => {
                    let obj = x.connections.find((item) => item.id == id)
                    obj.time = x.second;
                    return obj;
                });
            res.json(totalPings);
        }
        catch(err){
            res.send(500).json({err});
        }

    },
    getRecentHistory: async (timePeriod, secondsInHour, pingInterval) => {
        let timeLeft = timePeriod;
        let lastLeft = timeLeft;
        let count = 0;
        while (timeLeft > 0) {
            lastLeft = timeLeft;
            timeLeft -= secondsInHour;
            count++;
            secondsInHour = 3600;
        }
        const totalHours = await pingHistoryModel.find({}, {}, {
            sort: {
                '_id': -1
            }
        }).limit(count);

        let lastHour = totalHours[totalHours.length - 1];

        let n = lastHour.pings.length;

        lastLeft /= pingInterval;

        let required = n - lastLeft

        lastHour.pings = lastHour.pings.slice(required - 1, n - 1)
        totalHours[totalHours.length - 1] = lastHour;
        return totalHours;
    },
    getSimple: async (connection, timeFilter) => {


        let pingHistory = await connectionModel.findOne({
            _id: connection._id
        }).populate('pingHistory');
        pingHistory = pingHistory.pingHistory;

        if (pingHistory.hourlyHistory.length) {
            let l = pingHistory.hourlyHistory.length - 1;
            var data = [];
            for (var i = l; i >= 0; i--) {
                let hourObj = pingHistory.hourlyHistory[i];
                timeElapsed = Object.keys(hourObj.values).length * hourObj.interval;
                let timeLeft = timeElapsed - timeFilter;
                if (timeLeft > 0) {
                    data.unshift(helperFns.getHistory(hourObj.values, timeFilter / hourObj.interval));
                    break;
                } else {
                    data.unshift(helperFns.getHistory(hourObj.values, timeElapsed / hourObj.interval));
                    timeFilter -= timeElapsed;
                }
            }
            return Array.prototype.concat.apply([], data);
        }
    },
}