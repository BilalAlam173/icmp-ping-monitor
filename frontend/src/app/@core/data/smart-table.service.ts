import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { global } from '../../global';

@Injectable()
export class SmartTableService {
  constructor(private _global:global,private _http:HttpClient) {}


  getData() {

    return this._http.get(this._global.url+'connection');
  }
}
