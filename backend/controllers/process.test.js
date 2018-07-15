const process = require('./process')
const settingModel = require('../models/setting');
module.exports = async function () {
    let _settings = await settingModel.findOne().sort({
        field: 'asc',
        _id: 1
    }).limit(1);

    const conn = [{
        id:1,
        averagedLatency: 0,
        latency: 150,
        downTimePercent: 0,
        pingCount: 1,
        status: 1,
        upTimePercent: 100,
    },{
        id:2,
        averagedLatency: 150,
        latency: 150,
        downTimePercent: 0,
        pingCount: 2,
        status: 1,
        upTimePercent: 100,
    },{
        id:3,
        averagedLatency: 150,
        latency: 150,
        downTimePercent: 0,
        pingCount: 3,
        status: 1,
        upTimePercent: 100,
    },{
        id:4,
        averagedLatency: 150,
        latency: 150,
        downTimePercent: 0,
        pingCount: 4,
        status: 1,
        upTimePercent: 100,
    },{
        id:5,
        averagedLatency: 150,
        latency: 150,
        downTimePercent: 0,
        pingCount: 5,
        status: 1,
        upTimePercent: 100,
    },{
        id:6,
        averagedLatency: 150,
        latency: 0,
        downTimePercent: 17,
        pingCount: 6,
        status: 1,
        upTimePercent: 83,
    },{
        id:7,
        averagedLatency: 150,
        latency: 150,
        downTimePercent: 14,
        pingCount: 7,
        status: 1,
        upTimePercent:86,
    },{
        id:8,
        averagedLatency: 150,
        latency: 150,
        downTimePercent: 12,
        pingCount: 8,
        status: 1,
        upTimePercent: 88,
    },{
        id:9,
        averagedLatency: 150,
        latency: 150,
        downTimePercent: 11,
        pingCount: 9,
        status: 1,
        upTimePercent: 89,
    },{
        id:10,
        averagedLatency: 150,
        latency: 150,
        downTimePercent: 10,
        pingCount: 10,
        status: 1,
        upTimePercent: 90,
    },
    {
        id:11,
        averagedLatency: 150,
        latency: 150,
        downTimePercent: 9,
        pingCount: 10,
        status: 1,
        upTimePercent: 91,
    },
    {
        id:12,
        averagedLatency: 150,
        latency: 150,
        downTimePercent: 9,
        pingCount: 10,
        status: 1,
        upTimePercent: 91,
    },
    {
        id:13,
        averagedLatency: 150,
        latency: 150,
        downTimePercent: 8,
        pingCount: 10,
        status: 1,
        upTimePercent: 92,
    },
    {
        id:14,
        averagedLatency: 150,
        latency: 150,
        downTimePercent: 7,
        pingCount: 10,
        status: 1,
        upTimePercent: 93,
    },
    {
        id:15,
        averagedLatency: 150,
        latency: 150,
        downTimePercent: 7,
        pingCount: 10,
        status: 1,
        upTimePercent: 93,
    }]

    let item = {
        id:15,
        averagedLatency: 0,
        latency: 150,
        downTimePercent: 0,
        pingCount: 1,
        status: 1,
        upTimePercent: 100,
    }



    // for (let i = 1; i <=50; i++) {
    //     conn.pingCount = i;
    //     if (i === 5){
    //         conn.latency = 0;
    //     }else{
    //         conn.latency =50;
    //     }
    //     _calculateIncremental(conn);
    // }
    for (let i = 0; i < conn.length; i++) {
           let connObj=Object.assign(conn[i]);
           item.pingCount=i+1;
           item.latency=conn[i].latency;
           item = _calculateIncremental(item)
           console.log(connObj.upTimePercent+"-"+item.upTimePercent);

        }
    

     function _calculateIncremental(connection) {

        /* a=last calculated average latency
         * l=current ping's latency
         * n=total pings to count average for
         * @formula:latest avg value = a+(l-a)/n
         */
        // _settings.timePeriod

        let n = connection.pingCount < _settings.timePeriod ? connection.pingCount : _settings.timePeriod;
        connection.averagedLatency = Math.floor(connection.averagedLatency + ((connection.latency - connection.averagedLatency) / n));

        /* a=last calculated average upTime
         * l=current ping's latency, 0 or 1
         * n=total pings to count average for
         * @formula:latest avg value = a+(l-a)/n
         */
        let upTime = connection.upTimePercent;
        connection.upTimePercent = Math.round(upTime + (((connection.latency >= 1 ? 100 : 0) - upTime) / n));
        connection.downTimePercent = 100 - connection.upTimePercent;

        return connection;
    }

}