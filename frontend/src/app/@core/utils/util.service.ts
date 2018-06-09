import { Injectable } from '@angular/core';
import { SettingService } from '../../setting.service';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(private _settingService:SettingService) { }

  getTimeOptions(pingInterval){
      return  [
        {value: 60/pingInterval, title: '1m'},
        {value: 600/pingInterval, title: '10m'},
        {value: 1800/pingInterval, title: '30m'},
        {value: 3600/pingInterval, title: '1h'},
        {value: 10800/pingInterval, title: '3h'},
        {value: 21600/pingInterval, title: '6h'},
        {value: 43200/pingInterval, title: '12h'},
        {value: 86400/pingInterval, title: '1d'},
        {value: 604800/pingInterval, title: '7d'},
        {value: (86400*30)/pingInterval, title: '1mo'},
      ]
  }
}
