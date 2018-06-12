const helperFns = {};
helperFns.toPings = function (time, unit) {
    if (isNaN(Number(time))) {
        return null;

    }
    let global = require('./global');
    switch (unit) {
        case 's':
            return time / global.pingInterval;
            break;
        case 'm': //min
            return (time * 60) / global.pingInterval;
            break;
        case 'h': //hours
            return (time * 3600) / global.pingInterval;
            break;
        case 'd': //day
            return (time * 24 * 3600) / global.pingInterval;
            break;
        case 'w':
            return (time * 7 * 24 * 3600) / global.pingInterval;
            break;
        case 'mo':
            return (time * 30 * 24 * 3600) / global.pingInterval;
            break;
        case 'y':
            return (time * 12 * 30 * 24 * 3600) / global.pingInterval;
            break;
    }
}

helperFns.toProperFormat = function (time) {
    let units = [{
        value: 60,
        symbol: 'm'
    }, {
        value: 60,
        symbol: 'h'
    }, {
        value: 24,
        symbol: 'd'
    }, {
        value: 30,
        symbol: 'mo'
    }, {
        value: 12,
        symbol: 'y'
    }];
    for (var i = 0; i < units.length; i++) {
        if (units[i].value > time) {
            if (i > 0) {
                return `${time}${units[i-1].symbol}`;
            } else if(i==units.length-1){
                return `${time}${units[i].symbol}`;
            }
             else {
                return `${time}s`;
            }
        }
        time =Math.round(time/units[i].value);
    }
}

helperFns.toSeconds = function (time, unit) {
    if (isNaN(Number(time))) {
        return null;

    }
    let global = require('./global');
    switch (unit) {
        case 'm': //min
            return (time * 60);
            break;
        case 'h': //hours
            return (time * 3600);
            break;
        case 'd': //day
            return (time * 24 * 3600);
            break;
        case 'w':
            return (time * 7 * 24 * 3600);
            break;
        case 'mo':
            return (time * 30 * 24 * 3600);
            break;
        case 'y':
            return (time * 12 * 30 * 24 * 3600);
            break;
        default:
            return null;
            break;
    }
}

helperFns.getHistory = function (hour, range) {
    let i = 1;
    let n = Object.keys(hour.values).length;
    let r = n - range;
    let time = hour.timestamp_hour;
    var data = [];
    for (var key in hour.values) {
        if (i > r) {
            let obj = {};
            time.setSeconds(time.getSeconds()+5);
            obj[`${time?time:key}`] = hour.values[key];
            data.push(obj);

        }
        i++
    }
    return data;

}

module.exports = helperFns;