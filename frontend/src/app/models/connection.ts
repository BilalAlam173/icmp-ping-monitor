export class Connection{
  name:String;
    ip:String;
    upTimePercent:Number;
    downTimePercent:Number;
    status:Number=-1;
    averagedLatency=0;
    latencyThreshold_Value:1000;//milliseconds
    latencyThreshold_pings:120;
    latencyThreshold_count:0;//no of pings
    statusThreshold_pings:12;
    statusThreshold_count:0;//no of pings
    downTimePercentThreshold_Value:75;//percent
    downTimePercentThreshold_pings:120;
    downTimePercentThreshold_count:0;//no of pings
    pingCount=0;
    pingHistory:String;
    pingsPerHour=-1;

    constructor() {
    this.upTimePercent=0;
    this.downTimePercent=0;
    this.status=-1;
    this.averagedLatency=0;
    this.latencyThreshold_Value=1000;//milliseconds
    this.latencyThreshold_pings=120;
    this.latencyThreshold_count=0;//no of pings
    this.statusThreshold_pings=12;
    this.statusThreshold_count=0;//no of pings
    this.downTimePercentThreshold_Value=75;//percent
    this.downTimePercentThreshold_pings=120;
    this.downTimePercentThreshold_count=0;//no of pings
    this.pingCount=0;
    this.pingsPerHour=-1;
  }
}
