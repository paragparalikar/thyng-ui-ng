import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClrDatagridSortOrder } from '@clr/angular';
import { ConfirmDialogService } from 'src/app/shared/confirm-dialog/confirm-dialog.service';
import { Message } from 'src/app/shared/message';
import { Thing } from 'src/app/thing/thing';
import { ThingService } from 'src/app/thing/thing.service';
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
  showProgressBar: boolean = true;

  constructor(private route: ActivatedRoute,
              private thingService: ThingService,
              private sensorService: SensorService,
              private confirmDialogService: ConfirmDialogService) { }

  ngOnInit(): void {
    this.message = undefined;
    this.route.paramMap.subscribe(
      map => {
        this.showProgressBar = true;
        const thingId = +map.get('thingId')!;
        this.thingService.findById(thingId).subscribe(thing => this.thing = thing);
        this.sensorService.findByThingId(thingId).subscribe(sensors => {
          this.sensors = sensors;
          this.showProgressBar = false;
        });
      }
    );
  }

  delete(sensor: Sensor): void {
    this.confirmDialogService.show({
      buttonClasses: 'btn-danger',
      buttonText: 'Delete',
      iconClasses: 'is-danger',
      iconShape: 'exclamation-triangle',
      text: `Are you sure you want to delete sensor ${sensor.name}?`
    }).subscribe(
      value => {
        if(value) this._delete(sensor);
      }
    );
  }

  private _delete(sensor: Sensor): void {
    this.sensorService.delete(sensor.id!).subscribe(
      data => {
        this.sensors.splice(this.sensors.indexOf(sensor), 1);
        this.message = {
          iconShape: 'check',
          styleClasses: 'alert-success',
          text: `Sensor ${sensor.name} has been deleted successfully`
        };
      }
    );
  }

}
