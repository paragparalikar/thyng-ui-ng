import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from "@angular/forms"

import '@cds/core/toggle/register.js';
import { Sensor } from '../sensor/sensor';
import { SensorService } from '../sensor/sensor.service';
import { Thing } from '../thing/thing';
import { ThingService } from '../thing/thing.service';
import { DashboardService, PlotDto } from './dashboard.service';

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
  }

  toggleDataCollection(){
    this.dashboardservice.enable(this.dataCollectionToggle).subscribe(
      value => this.dataCollectionToggle = value
    );
  }

  generateGraph() {
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
  }

}

