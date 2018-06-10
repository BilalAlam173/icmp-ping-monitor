import { Component, OnDestroy } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableService } from './../../@core/data/smart-table.service';
import { Router } from '@angular/router';
import { UtilService } from '../../@core/utils/util.service';
import { SettingService } from '../../setting.service';

@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class DashboardComponent implements OnDestroy{
  timer: any;
  settings:any;
  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableService, private _settingService: SettingService, private _router: Router, private _util: UtilService) {
    this.applySettings();
    this.loadData();
    this.timer = setInterval(() => {
      this.loadData();
    }, 5000)
  }

  loadData() {
    let data;
    this.service.getData().subscribe((res) => {
      data = res;
      this.source.load(data);
    });
  }

  async applySettings() {
    let setting: any = await this._settingService.get().toPromise();
    let timeOptions = await this._util.getTimeOptions(setting.pingInterval);
    if (timeOptions) {
      this.settings = {
        add: {
          addButtonContent: '<i class="nb-plus"></i>',
          createButtonContent: '<i class="nb-checkmark"></i>',
          cancelButtonContent: '<i class="nb-close"></i>',
          confirmCreate: true,
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
            title: 'Name / Description',
            type: 'string',
          },
          ip: {
            title: 'IP address   ',
            type: 'string',
          },
          status: {
            title: 'Status',
            type: 'string',
            editable: false,
            addable: false,
          },
          averagedLatency: {
            title: 'Latency(ms)',
            width:'10px',
            editable: false,
            addable: false,
          },
          upTimePercent: {
            title: 'uptime(%)',
            type: 'string',
            editable: false,
            addable: false,
          },
          downTimePercent: {
            title: 'Loss(%)',
            type: 'string',
            editable: false,
            addable: false,
          },
          latencyThreshold_Value: {
            title: 'LT(ms)',
            type: 'string',
          },
          latencyThreshold_pings: {
            title: 'LT(time)',
            type: 'string',
            editor: {
              type: 'list',
              config: {
                list: timeOptions,
              },
            },
          },
          statusThreshold_pings: {
            title: 'ST(time)',
            editor: {
              type: 'list',
              config: {
                list: timeOptions,
              },
            },
            type: 'string',
          },
          downTimePercentThreshold_Value: {
            title: 'Loss(%)',
            type: 'string',
          },
          downTimePercentThreshold_pings: {
            title: 'Loss Th(time)',
            type: 'string',
            editor: {
              type: 'list',
              config: {
                list: timeOptions,
              },
            },
          },
        },
      };
    }

  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.service.delete(event.data).subscribe((res) => {

      });
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
  onUserRowSelect($event): void {
    this._router.navigate([`/pages/detail/${$event.data._id}`]);
  }

  onEditConfirm(event): void {
    this.service.edit(event.newData).subscribe((res) => {

    });
    event.confirm.resolve();
  }
  onAddConfirm(event): void {
    console.log(event)
    this.service.add(event.newData).subscribe((res) => {

    });
    event.confirm.resolve();
  }

  ngOnDestroy(){
    clearInterval(this.timer);
  }
}
