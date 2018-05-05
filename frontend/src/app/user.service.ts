import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {
  // url = "http://13.236.110.226/user"
  url = "/user"

  constructor(private http: HttpClient) { }
  get() {
    return this.http.get(this.url);
  }
  getPing() {
    return this.http.get(this.url+`/ping`);
  }
  getFetch() {
    return this.http.get(this.url+`/fetch`);
  }
  delete(id:String) {
    return this.http.delete(this.url+`/${id}`,{responseType: 'text'});
  }
  insert(user:any) {
    return this.http.post(this.url,user);
  }
  update(user:any) {
    return this.http.put(this.url+`/${user._id}`,user);
  }
  updatePing(time:any) {
    return this.http.put(this.url+`/ping/${time}`,null,{responseType: 'text'});
  }
  updateFetch(time:any) {
    return this.http.put(this.url+`/fetch/${time}`,null,{responseType: 'text'});
  }

  ping(user:any){
    return this.http.post('/user/ping',user);
  }

}
