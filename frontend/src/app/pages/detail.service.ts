import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { global } from './../global';


@Injectable({
  providedIn: 'root'
})
export class DetailService {

  constructor(private _http:HttpClient,private _global:global) { }

  getData(url){
    let options ={
      "filters":[
        {
           "type":"timeFilter",
           "value":"1",
           "unit":"mo"
        }]
    }
    return this._http.post(`${this._global.url}pingHistory/${url}`,{options:options});
  }
}
