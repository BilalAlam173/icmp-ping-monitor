import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableService } from './../../@core/data/smart-table.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class DashboardComponent {
  timer:any;
  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i (click)="onEditConfirm()" class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      name: {
        title: 'Name',
        type: 'string',
      },
      ip: {
        title: 'IP address',
        type: 'string',
      },
      status: {
        title: 'Status',
        type: 'string',
      },
      averagedLatency: {
        title: 'Latency(ms)',
        type: 'string',
      },
      upTimePercent: {
        title: 'uptime(%)',
        type: 'string',
      },
      downTimePercent: {
        title: 'downtime(%)',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableService,private _router:Router) {
  this.loadData();
  this.timer=setInterval(()=>{
  this.loadData();
  },5000)
  }

  loadData(){
    let data;
    this.service.getData().subscribe((res) => {
      data = res;
      this.source.load(data);
    });
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.service.delete(event.data).subscribe((res)=>{

      });
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
  onUserRowSelect($event):void {
    this._router.navigate([`/pages/detail/${$event.data._id}`]);
  }

  onEditConfirm(event): void {
    this.service.edit(event.newData).subscribe((res)=>{

    });
    event.confirm.resolve();
     }
}
