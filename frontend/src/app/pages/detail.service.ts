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
      unit: 'm'
    }, {
      value: '10',
      unit: 'm'
    },
    {
      value: '30',
      unit: 'm'
    }, {
      value: '1',
      unit: 'h'
    }, {
      value: '3',
      unit: 'h'
    }, {
      value: '6',
      unit: 'h'
    }, {
      value: '12',
      unit: 'h'
    }, {
      value: '1',
      unit: 'd'
    }, {
      value: '7',
      unit: 'd'
    }, {
      value: '1',
      unit: 'mo'
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
        break;
      case 'm': //min
        return (time * 60) / pingInterval;
        break;
      case 'h': //hours
        return (time * 3600) / pingInterval;
        break;
      case 'd': //day
        return (time * 24 * 3600) / pingInterval;
        break;
      case 'w':
        return (time * 7 * 24 * 3600) / pingInterval;
        break;
      case 'mo':
        return (time * 30 * 24 * 3600) / pingInterval;
        break;
      case 'y':
        return (time * 12 * 30 * 24 * 3600) / pingInterval;
        break;
    }
  }
}
