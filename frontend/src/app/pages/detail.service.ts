import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { global } from './../global';


@Injectable({
  providedIn: 'root'
})
export class DetailService {
  timeFilter = [
    {
      value: '1',
      unit: 'm',
      seconds:60,
    }, {
      value: '10',
      unit: 'm',
      seconds:60*10,
    },
    {
      value: '30',
      unit: 'm',
      seconds:60*30,
    }, {
      value: '1',
      unit: 'h',
      seconds:60*60,
    }, {
      value: '3',
      unit: 'h',
      seconds:60*60*3,
    }, {
      value: '6',
      unit: 'h',
      seconds:60*60*6,
    }, {
      value: '12',
      unit: 'h',
      seconds:60*60*12,
    }, {
      value: '1',
      unit: 'd',
      seconds:60*60*24,
    }, {
      value: '7',
      unit: 'd',
      seconds:60*60*24*7,
    }, {
      value: '1',
      unit: 'mo',
      seconds:60*60*24*30,
    },
  ]

  constructor(private _http: HttpClient, private _global: global) { }

  getData(url, options) {
    return this._http.post(`${this._global.url}pingHistory/${url}`, { options: options });
  }

  toPings(time, unit,pingInterval) {
    if (isNaN(Number(time))||isNaN(pingInterval)) {
      return null;
    }
    switch (unit) {
      case 's':
        return time / pingInterval;
      case 'm': //min
        return (time * 60) / pingInterval;
      case 'h': //hours
        return (time * 3600) / pingInterval;
      case 'd': //day
        return (time * 24 * 3600) / pingInterval;
      case 'w':
        return (time * 7 * 24 * 3600) / pingInterval;
      case 'mo':
        return (time * 30 * 24 * 3600) / pingInterval;
      case 'y':
        return (time * 12 * 30 * 24 * 3600) / pingInterval;
    }
  }
}
