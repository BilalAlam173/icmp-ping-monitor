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
  @ViewChild('myChart') myChart: ElementRef;
  data = [
    ['Time', 'Latency']
  ];

  constructor(private _detailService:DetailService,private route:ActivatedRoute) { }

  ngAfterViewInit() {
    this.route.params.subscribe((res)=>{
      this.getData(res);

      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(()=>{this.drawChart()});
      setInterval(()=>{
        this.getData(res);

      },3000);
    })
  }

  getData(res){
    this._detailService.getData(res.id).subscribe((res:Array<any>)=>{
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
      console.log(res);
      console.log(this.data);
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

    var chart = new google.visualization.LineChart(this.myChart.nativeElement);

    chart.draw(data, options);
  }

}
