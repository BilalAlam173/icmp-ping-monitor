import { Component, OnInit } from '@angular/core';
import { SettingService } from '../setting.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username:String;
  password:String;
  error=false;

  constructor(private _settingService:SettingService,private _router:Router) { }

  ngOnInit() {
    if(localStorage.getItem('user')){
      this._router.navigate(['pages/dashboard'])
    }
  }

  login(){
    console.log(this.username)
this._settingService.login(this.username,this.password).subscribe((res)=>{
  this.error=false;
  localStorage.setItem('user',res);
  this._router.navigate(['pages/dashboard'])
},(err)=>{
  this.error=true;
  console.log('error')
});
  }

}
