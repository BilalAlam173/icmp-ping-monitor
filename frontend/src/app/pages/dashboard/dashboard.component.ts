import { Component, Input, OnInit, Output, EventEmitter,OnDestroy } from '@angular/core';
import { LocalDataSource, ViewCell } from 'ng2-smart-table';
import { SmartTableService } from './../../@core/data/smart-table.service';
import { Router } from '@angular/router';
import { UtilService } from '../../@core/utils/util.service';
import { SettingService } from '../../setting.service';
import 'rxjs';
import { Connection } from '../../models/connection';


@Component({
  template: `
      <h6 class="{{value}}"><b>{{value}}</b></h6>
  `,
  styles: [`
    .online{
      color:green
    }
    .offline{
      color:red;
    }
  `],
})
export class StatusRenderComponent implements ViewCell {

  @Input() value: string | number;
  @Input() rowData: any;

  @Output() save: EventEmitter<any> = new EventEmitter();


}

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
  settings: any;
  source: LocalDataSource = new LocalDataSource();
  connection= new Connection();
  timeOptions:any;

  constructor(private service: SmartTableService, private _settingService: SettingService, private _router: Router, private _util: UtilService) {
    this.applySettings();
    this.loadData();
    this.timer = setInterval(() => {
      this.loadData();
    }, 5000)
  }

  loadData() {
    this.service.getData().subscribe((res: any) => {
      res = res.map(x => {
        x.status = x.status > 0 ? 'online' : 'offline';
        return x;
      });
      this.source.load(res);
    });
  }

  async applySettings() {
    let setting: any = await this._settingService.get().toPromise();
    this.timeOptions = await this._util.getTimeOptions(setting.pingInterval);
      this.settings = {
        actions: {
          add: false,
          edit: false,
          delete: true,
          position: 'right',
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
            title: 'IP address',
            type: 'string',
          },
          status: {
            title: 'Status',
            type: 'custom',
            editable: false,
            addable: false,
            renderComponent: StatusRenderComponent,
          },
          averagedLatency: {
            title: 'Latency(ms)',
            width: '10px',
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
          // latencyThreshold_Value: {
          //   title: 'LT(ms)',
          //   type: 'string',
          // },
          // latencyThreshold_pings: {
          //   title: 'LT(time)',
          //   type: 'string',
          //   editor: {
          //     type: 'list',
          //     config: {
          //       list: timeOptions,
          //     },
          //   },
          // },
          // downTimePercentThreshold_Value: {
          //   title: 'Loss Th(%)',
          //   type: 'string',
          // },
          // downTimePercentThreshold_pings: {
          //   title: 'Loss Th(time)',
          //   type: 'string',
          //   editor: {
          //     type: 'list',
          //     config: {
          //       list: timeOptions,
          //     },
          //   },
          // },
          // statusThreshold_pings: {
          //   title: 'ST(time)',
          //   editor: {
          //     type: 'list',
          //     config: {
          //       list: timeOptions,
          //     },
          //   },
          //   type: 'string',
          // },
        },
      };

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
  onAddConfirm(): void {
    console.log(this.connection)
    this.connection
    this.service.add(this.connection).subscribe((res) => {

    });
  }

  ngOnDestroy(){
    clearInterval(this.timer);
  }
}
