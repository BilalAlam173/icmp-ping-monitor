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

helperFns.getHistory = function(values,range){
    let i=1;
    let n=Object.keys(values).length;
    let r=n-range;
    var data=[];
    for(var key in values){
        if(i>r){
            let obj={};
            obj[`${key}`]=values[key];
            data.push(obj);

        }
        i++
    }
    return data;

}

module.exports = helperFns;