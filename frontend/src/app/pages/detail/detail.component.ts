import { Component, OnDestroy, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { DetailService } from '../detail.service';
import { ActivatedRoute } from '@angular/router';
declare var google: any;

@Component({
  selector: 'detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements AfterViewInit,OnDestroy {
  @ViewChild('latencyChart') latencyChart: ElementRef;
  @ViewChild('downTimeChart') Chart: ElementRef;
  timer:any;
  data = [
    ['Time', 'Latency']
  ];
  dataDT = [
    ['Time', 'downTime']
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
      this.timer=setInterval(()=>{
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
      this.dataDT = [
        ['Time', 'Loss %']
      ];
      for(var i=0;i<res.length;i++){
        let item = [];
        let itemDT=[]
        item.push(String(i));
        itemDT.push(String(i));
        let value=String(res[i][Object.keys(res[i])[0]]).split('-');
        item.push(Number(value[0]));
        itemDT.push(Number(value[1]));
        this.data.push(item);
        this.dataDT.push(itemDT);
      }
      this.drawChart();
    },(err)=>{
      console.log(err);
    });
  }

  drawChart(){
    let data=google.visualization.arrayToDataTable(this.data);
    let dataDT=google.visualization.arrayToDataTable(this.dataDT);

    var options = {
      title: 'Latency',
      curveType: 'function',
      legend: { position: 'bottom' }
    };
    var optionsDT = {
      title: 'Loss Percentage',
      curveType: 'none',
      legend: { position: 'bottom' }
    };

    var chart = new google.visualization.LineChart(this.latencyChart.nativeElement);
    var chartDT = new google.visualization.LineChart(this.Chart.nativeElement);

    chart.draw(data, options);
    chartDT.draw(dataDT, optionsDT);
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

  ngOnDestroy(){
    clearInterval(this.timer);
  }

}
