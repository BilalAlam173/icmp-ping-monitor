const pingHistoryModel = require('../models/pingHistory');

module.exports = {

    get: async (req, res) => {
        let options = req.body.options;
        let filters = options.filters || null;
        let timeFilter;

        if (Array.isArray(filters) && filters.length > 0) {
            for (var i = 0; i < filters.length; i++) {
                switch (filters[i].type) {
                    case 'timeFilter':
                        timeFilter = filters[i];
                        break;

                }
            }
        } else {
            timeFilter = {
                value: '1',
                unit: 'h'
            };
        }

        const pingHistory = await pingHistoryModel.findOne({
            connection: req.params.id
        })

        // if (pingHistory.hourlyHistory.length) {
        //     let l = pingHistory.hourlyHistory.length - 1;
        //     if (pingHistory.hourlyHistory[l].values) {
        //         for (let key in pingHistory.hourlyHistory.values) {

        //         }
        //     }
        // }

    },
}