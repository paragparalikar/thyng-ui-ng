import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClrDatagridSortOrder } from '@clr/angular';
import { Message } from 'src/app/shared/message';
import { Thing } from 'src/app/thing/thing';
import { Sensor } from '../sensor';
import { SensorService } from '../sensor.service';

@Component({
  selector: 'app-sensor-list',
  templateUrl: './sensor-list.component.html',
  styles: [
  ]
})
export class SensorListComponent implements OnInit {

  thing?: Thing;
  sensors: Sensor[] = [];
  message?: Message;
  sortType = ClrDatagridSortOrder.ASC;

  constructor(private route: ActivatedRoute,
              private sensorService: SensorService) { }

  ngOnInit(): void {
    this.route.data.subscribe(
      data => {
        this.message = undefined;
        this.thing = data.thing;
        this.sensors = data.sensors;
      }
    );
  }

  delete(sensor: Sensor): void {

  }

}
