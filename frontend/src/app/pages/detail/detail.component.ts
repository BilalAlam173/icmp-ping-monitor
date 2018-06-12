import { Component, OnDestroy, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { DetailService } from '../detail.service';
import { ActivatedRoute } from '@angular/router';
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
  timer: any;
  id: String;
  data: any = [
    ['Time', 'Latency']
  ];
  dataDT: any = [
    ['Time', 'downTime']
  ];
  timeFilter = [];
  options = {
    "filters": [
      {
        "type": "timeFilter",
        "value": "10",
        "unit": "m"
      }]
  }


  constructor(private _detailService: DetailService, private route: ActivatedRoute) { }

  ngAfterViewInit() {
    this.loadChart();
  }
  loadChart() {
    this.timeFilter = this._detailService.timeFilter;
    this.route.params.subscribe((res) => {
      this.id = res.id;

      google.charts.load('current', { 'packages': ['annotatedtimeline'] });
      google.charts.setOnLoadCallback(() => { this.drawChart() });
      this.timer = setInterval(() => {
        this.drawChart();

      }, 5000);
    })
  }

  getData() {
    return new Promise(resolve => {
      this._detailService.getData(this.id, this.options).subscribe((res: Array<any>) => {
        this.data = [
          [{ label: 'Time', type: 'date' }, { label: 'Latency', type: 'number' }]
        ];
        this.dataDT = [
          [{ label: 'Time', type: 'date' }, { label: 'Loss %', type: 'number' }]
        ];
        for (var i = 0; i < res.length; i++) {
          let item = [];
          let itemDT = []
          let time = new Date(Object.keys(res[i])[0])
          let value = String(res[i][Object.keys(res[i])[0]]).split('-');
          item.push(time);
          item.push(Number(value[0]));
          itemDT.push(time);
          itemDT.push(Number(value[1]));
          this.data.push(item);
          this.dataDT.push(itemDT);
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
    this.options.filters = [
      {
        "type": "timeFilter",
        "value": obj.value,
        "unit": obj.unit
      }];

    this.loadChart();
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }

}
