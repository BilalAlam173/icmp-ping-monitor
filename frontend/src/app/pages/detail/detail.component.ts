import { Component, OnDestroy, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { DetailService } from '../detail.service';
import { ActivatedRoute } from '@angular/router';
declare var google: any;

@Component({
  selector: 'detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements AfterViewInit {
  @ViewChild('latencyChart') latencyChart: ElementRef;
  @ViewChild('downTimeChart') Chart: ElementRef;
  data = [
    ['Time', 'Latency']
  ];
  timeFilter = [];
  options ={
    "filters":[
      {
         "type":"timeFilter",
         "value":"10",
         "unit":"m"
      }]
  }


  constructor(private _detailService:DetailService,private route:ActivatedRoute) { }

  ngAfterViewInit() {
    this.loadChart();
  }
  loadChart(){
    this.timeFilter=this._detailService.timeFilter;
    this.route.params.subscribe((res)=>{
      this.getData(res);

      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(()=>{this.drawChart()});
      setInterval(()=>{
        this.getData(res);

      },5000);
    })
  }

  getData(res){
    console.log('break')
    this._detailService.getData(res.id,this.options).subscribe((res:Array<any>)=>{
      this.data = [
        ['Time', 'Latency']
      ];
      for(var i=0;i<res.length;i++){
        let item = [];
        item.push(String(i));
        let value=res[i][Object.keys(res[i])[0]];
        item.push(value);
        this.data.push(item);
      }
      this.drawChart();
    },(err)=>{
      console.log(err);
    });
  }

  drawChart(){
    let data=google.visualization.arrayToDataTable(this.data);

    var options = {
      title: 'Latency',
      curveType: 'function',
      legend: { position: 'bottom' }
    };

    var chart = new google.visualization.LineChart(this.latencyChart.nativeElement);

    chart.draw(data, options);
  }

  onChange(value){
    let obj =this.timeFilter[value];
    this.options.filters=[
      {
         "type":"timeFilter",
         "value":obj.value,
         "unit":obj.unit
      }];

      this.loadChart();
  }

}
