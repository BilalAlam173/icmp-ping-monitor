import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  users;
  name;
  ip;
  fetchIntervalTime;
  pingIntervalTime;
  timer;

  constructor(private _userService: UserService) { }


  ngOnInit() {
    this.get();
    this.getFetchInterval();
    this.getPingInterval();

  }

  getFetchInterval() {
    this._userService.getFetch().subscribe(res => {
      this.fetchIntervalTime = res;
      this.timer = setInterval(() => {
        this.get();
      }, this.fetchIntervalTime*1000);
    });
  }

  getPingInterval() {
    this._userService.getPing().subscribe(res => {
      this.pingIntervalTime = res;
    });
  }

  setFetchInterval() {
    this._userService.updateFetch(this.fetchIntervalTime).subscribe(res => {
      if (this.timer) {
        clearInterval(this.timer);
      }
      this.timer = setInterval(() => {
        this.get();
      }, this.fetchIntervalTime*1000);
    });
  }
  setPingInterval() {
    this._userService.updatePing(this.pingIntervalTime).subscribe(res => {
      window.alert(`Ping Timer update at the server, new time is ${res}`)
    });
  }

  get() {
    this._userService.get().subscribe(res => {
      this.users = res;
      for (var i = 0; i < this.users.length; i++) {
        this.users[i].upTime = this.users[i].status ? this.calculateUpTime(i) : '--';
      }

    });
  }
  calculateUpTime(i) {
    var now = new Date().getTime();
    var upTime = (now - this.users[i].startTime) / 1000;
    var unit = "s";
    if (upTime >= 60) {
      upTime /= 60;
      unit = 'm';
      if (upTime >= 60) {
        upTime /= 60;
        unit = "h"
        if (upTime >= 24) {
          upTime /= 24;
          unit = "d"
          if (upTime >= 30) {
            upTime /= 30;
            unit = "mo"
          }
        }
      }
    }
    return Math.round(upTime) + ' ' + unit;
  }

  delete(i) {
    this._userService.delete(this.users[i]._id).subscribe(res => {
      console.log('deleted');
    });
    this.users.splice(i, 1);
  }

  add() {
    let user = {
      name: this.name,
      ip: this.ip,
    }
    this._userService.insert(user).subscribe(res => {
      this.users.push(res);
    });
  }

  update() {

  }


}
