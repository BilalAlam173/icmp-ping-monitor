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
  selectedTimePeriod:any;

  constructor(private _settingService:SettingService,private _detailService:DetailService) { }

  ngOnInit() {
    this._settingService.get().subscribe((res:any)=>{
    this.setting=res;
    this.timeFilter=this._detailService.timeFilter;
    console.log(this.timeFilter);
    this.selectedTimePeriod=this.timeFilter.findIndex(x=>{
      console.log(x.seconds+"--"+(res.timePeriod*res.pingInterval));
      return x.seconds==(res.timePeriod*res.pingInterval)
    });

    });
  }

  async onChange(time){
    let timeObj = this.timeFilter[Number(time.target.value)];
    time = await this._detailService.toPings(timeObj.value,timeObj.unit,this.setting.pingInterval);
    if(time){
      this.setting.timePeriod=time;
    }

  }

  onSubmit(){
    this._settingService.update(this.setting).subscribe((res)=>{
      this._settingService.update(this.setting).subscribe(res=>{
        console.log(res);
      });
    })
  }

}
