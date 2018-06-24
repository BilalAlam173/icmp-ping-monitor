import { Component, OnDestroy, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { DetailService } from '../detail.service';
import { ActivatedRoute } from '@angular/router';
import { Connection } from '../../models/connection';
import { SmartTableService } from '../../@core/data/smart-table.service';
declare var google: any;

@Component({
  selector: 'detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements AfterViewInit, OnDestroy {
  @ViewChild('latencyChart') latencyChart: ElementRef;
  @ViewChild('downTimeChart') Chart: ElementRef;
  paused = false;
  connection = new Connection();
  timer: any;
  id: String;
  data: any = [
    ['Time', 'Latency']
  ];
  dataDT: any = [
    ['Time', 'downTime']
  ];
  timeFilter = [];
  timePeriod=600;


  constructor(private _detailService: DetailService, private route: ActivatedRoute,private _connectionService:SmartTableService) { }

  ngAfterViewInit() {
    this.loadChart();
  }
  loadChart() {
    this.timeFilter = this._detailService.timeFilter;
    this.route.params.subscribe((res) => {
      this.id = res.id;
      this._connectionService.getOne(this.id).subscribe((connection:any)=>{
        this.connection=connection;
      })

      google.charts.load('current', { 'packages': ['annotatedtimeline'] });
      google.charts.setOnLoadCallback(() => { this.drawChart() });
      this.timer = setInterval(() => {
        this.drawChart();

      }, 5000);
    })
  }

  getData() {
    return new Promise(resolve => {
      this._detailService.getData(this.id, this.timePeriod).subscribe((res: Array<any>) => {
        this.data = [
          [{ label: 'Time', type: 'date' }, { label: 'Latency', type: 'number' }]
        ];
        this.dataDT = [
          [{ label: 'Time', type: 'date' }, { label: 'Loss %', type: 'number' }]
        ];
        for (var i = 0; i < res.length; i++) {

          let latency = [];
          let dt=[];
          let time = new Date(res[i].time);
          latency.push(time);
          dt.push(time);
          latency.push(res[i].latency)
          dt.push(res[i].downTime);
          
          this.data.push(latency);
          this.dataDT.push(dt);

          resolve();
        }
      }, (err) => {
        console.log(err);
      });
    })

  }
  onPause() {
    if (this.paused) {
      this.paused = false;
      this.timer = setInterval(() => {
        this.drawChart();

      }, 5000);
    } else {
      this.paused = true;
      clearInterval(this.timer);
    }
  }

  async drawChart() {
    const dataPromise = await this.getData();
    let data = new google.visualization.arrayToDataTable(this.data);
    let dataDT = new google.visualization.arrayToDataTable(this.dataDT);

    var options = {
      title: 'Latency',
      curveType: 'function',
      allowRedraw: true,
      displayZoomButtons: false,
      legend: { position: 'bottom' }
    };
    var optionsDT = {
      title: 'Loss Percentage',
      curveType: 'function',
      allowRedraw: true,
      displayZoomButtons: false,
      legend: { position: 'bottom' }
    };

    var chart = new google.visualization.AnnotatedTimeLine(this.latencyChart.nativeElement);
    var chartDT = new google.visualization.AnnotatedTimeLine(this.Chart.nativeElement);

    chart.draw(data, options);
    chartDT.draw(dataDT, optionsDT);
  }

  onChange(value) {
    this.paused=false;
    let obj = this.timeFilter[value];
    this.timePeriod=obj.seconds;

    this.loadChart();
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }

}
