import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { global } from './global';

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  constructor(private _http:HttpClient,private _global:global) { }

  login(username:String,password:String):Observable<any>{
    let data = {
      username,
      password
    }
    console.log(data);
    return this._http.post(`${this._global.url}login`,data);
  }
}
