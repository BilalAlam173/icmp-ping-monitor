import { Component, OnInit } from '@angular/core';
import { SettingService } from '../../setting.service';
import { DetailService } from '../detail.service';

@Component({
  selector: 'setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {
  setting :any={
  pingInterval:'',
  timePeriod:''
  };
  timeFilter=[];

  constructor(private _settingService:SettingService,private _detailService:DetailService) { }

  ngOnInit() {
    this._settingService.get().subscribe((res:any)=>{
    this.setting=res;
    this.timeFilter=this._detailService.timeFilter;

    });
  }

  onChange(time){
    time = this._detailService.toPings(time.value,time.filter,this.setting.pingInterval);
    if(time){
      this.setting.timePeriod=time;
    }

  }

  onSubmit(){
    this._settingService.update(this.setting).subscribe((res)=>{
      window.alert(res);
    })
  }

}
