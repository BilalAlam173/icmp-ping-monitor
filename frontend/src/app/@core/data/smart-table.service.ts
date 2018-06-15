import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { global } from '../../global';

@Injectable()
export class SmartTableService {
  constructor(private _global:global,private _http:HttpClient) {}


  getData() {
    return this._http.get(this._global.url+'connection');
  }
  getOne(id) {
    return this._http.get(`${this._global.url}connection/${id}`);
  }
  edit(connection){
    return this._http.put(`${this._global.url}connection`,connection);
  }
  delete(connection){
    return this._http.delete(`${this._global.url}connection/${connection._id}`,connection);
  }
  add(connection){
    return this._http.post(`${this._global.url}connection`,connection);
  }
}
