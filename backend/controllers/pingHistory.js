const pingHistoryModel = require('../models/pingHistory');
connectionModel = require('../models/connection');
const helperFns = require('../config/helper-fns');

module.exports = {

    get: async (req, res) => {
        let options = req.body.options;
        let filters = options && options.filters ? options.filters : null;
        let timeFilter;

        if (Array.isArray(filters) && filters.length > 0) {
            for (var i = 0; i < filters.length; i++) {
                switch (filters[i].type) {
                    case 'timeFilter':
                        timeFilter = helperFns.toSeconds(filters[i].value,filters[i].unit);
                        break;

                }
            }
        } else {
            timeFilter = 3600;
        }

        let pingHistory = await connectionModel.findOne({
            _id: req.params.id
        }).populate('pingHistory');
        pingHistory=pingHistory.pingHistory;

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
            res.json(Array.prototype.concat.apply([], data));
        }
    },
}