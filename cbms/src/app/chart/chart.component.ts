import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, TimeUnit } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {

  _timestamp: Date[] = [];
  _value: number[] = [];
  _label: string;

  @Input() set timestamp(timestamp: Date[]) {
    this._timestamp = timestamp;
    this.lineChartLabels = timestamp.map(time => time ? time.toString() : '');
  }

  @Input() set value(values: number[]) {
    this._value = values;
    this.lineChartData = [{
      data: this._value,
      label: this._label
    }];
  }

  @Input() set label(label: string){
    this._label = label;
  }

  public lineChartData: ChartDataSets[] = [];
  public lineChartLabels: Label[] = [];
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    annotation: true,
  };

  public lineChartColors: Color[] = [
    {
      borderColor: 'green',
      backgroundColor: 'rgba(0,0,0,0)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];




}



