import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from "@angular/forms"

import '@cds/core/toggle/register.js';
import { Sensor } from '../sensor/sensor';
import { SensorService } from '../sensor/sensor.service';
import { Thing } from '../thing/thing';
import { ThingService } from '../thing/thing.service';
import { DashboardService, PlotDto } from './dashboard.service';
import { BaseChartDirective } from 'ng2-charts';
import * as JSZip from 'jszip';
import * as JSZipUtils from 'D:/Users/Prachi/cbms/thyng-ui-ng/cbms/src/assets/script/jszip-utils.js';

import { count } from 'node:console';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  things: Thing[] = [];
  sensors: Sensor[] = [];
  opened: boolean = false;
  selectedThing?: Thing;
  selectedSensor?: Sensor;
  fromDate?: Date;
  toDate?: Date;
  dataCollectionToggle: boolean;
  plots: PlotDto[] = [];
  values: number[] = [];
  timestamps: Date[] = [];
  showGraph: boolean = false;
  dataFrequency: number ;
  options: string;
  dataBackupAlert: boolean = false;
  @ViewChild(BaseChartDirective) chart: BaseChartDirective;
  labels_line: any;
  public url = 'E:/cbms-data-source/abc.txt';
  todayString: string;



  todaysDate(): string {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    this.todayString = yyyy + '-' + mm + '-' + dd;
    return this.todayString;
  }

  constructor(private thingService: ThingService,
    private sensorService: SensorService,
    public datePipe: DatePipe,
    private dashboardservice: DashboardService) { }

  ngOnInit(): void {
    this.thingService.findAll().subscribe(
      things => this.things = things
    );
    this.sensorService.findAll().subscribe(
      sensors => this.sensors = sensors
    );

    /*this.dashboardservice.save(this.dataFrequency).subscribe(
      dataFrequency => this.dataFrequency = dataFrequency 
    );*/

    this.todaysDate();

  }

  toggleDataCollection() {
    /*this.dashboardservice.enable(this.dataCollectionToggle).subscribe(
      value => this.dataCollectionToggle = value */
    if (this.dataCollectionToggle) {
      this.dashboardservice.enable(this.dataFrequency).subscribe(
        dataFrequency => this.dataFrequency = dataFrequency
      );
    }
    else {
      this.dashboardservice.enable(this.dataFrequency).subscribe(
        dataFrequency => 0);
    }
  }

  generateGraph() {
    console.log("graph")
    this.opened = false
    this.dashboardservice.generate({
      thingId: this.selectedThing.id,
      sensorId: this.selectedSensor.id,
      from: this.fromDate,
      to: this.toDate
    }).subscribe(
      result => {
        this.plots = result.plots;
        this.values = result.values;
        this.timestamps = result.timestamps;
      }
    );
    this.showGraph = true;
    setTimeout(() => {
      if (this.chart && this.chart.chart && this.chart.chart.config) {
        this.chart.chart.config.data.labels = this.labels_line;
        this.chart.chart.update();
      }
      console.log("refresh")
    });

  }
  closeAlert() {
    this.dataBackupAlert = false;
  }

  backup(): void {
    console.log("backup")
    window.open(this.url, null);
  }

  /* 
    backup(): void {
      console.log("backup")
      let count = 0;
      const zip = new JSZip();
  
      this.url.forEach((url) => {
        const filename = url.split('/')[url.split('/').length - 1];
  
        JSZipUtils.getBinaryContent(url, (err, data) => {
          if (err) {
            throw err;
          }
  
          zip.file(filename, data, { binary: true });
          count++;
  
          if (count === this.url.length) {
            zip.generateAsync({ type: 'blob' }).then((content) => {
              const objectUrl: string = URL.createObjectURL(content);
              const link: any = document.createElement('a');
  
              link.download = 'sample.zip';
              link.href = objectUrl;
              link.click();
            });
          }
        });
      });
    }*/

}






