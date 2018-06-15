import { Component, OnInit, Input } from '@angular/core';
import { Connection } from '../../models/connection';
import { UtilService } from '../../@core/utils/util.service';
import { SmartTableService } from '../../@core/data/smart-table.service';

@Component({
  selector: 'edit-connection-form',
  templateUrl: './edit-connection-form.component.html',
  styleUrls: ['./edit-connection-form.component.scss']
})
export class EditConnectionFormComponent implements OnInit {
  @Input() connection=new Connection;
  title:String;
  timeOptions:any;
  isLoading=false;

  constructor(private _util:UtilService,private _connectionService:SmartTableService) { }

  ngOnInit() {
    this.title=this.connection?'Edit connection(*Required)':'Add a new connection(*Required)';
    this.timeOptions=this._util.getTimeOptions(5);
  }
  onSubmit(){
    this.isLoading=true;
    if(this.connection){
      this._connectionService.edit(this.connection).subscribe(res=>{
        console.log(res);
        this.isLoading=false;
      })
    }else{
      this._connectionService.add(this.connection).subscribe(res=>{
        this.isLoading=false;
      });
    }
  }

}
