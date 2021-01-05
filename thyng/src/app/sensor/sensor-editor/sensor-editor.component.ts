import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Message } from 'src/app/shared/message';
import { Thing } from 'src/app/thing/thing';
import { Sensor } from '../sensor';
import { SensorService } from '../sensor.service';

@Component({
  selector: 'app-sensor-editor',
  templateUrl: './sensor-editor.component.html',
  styles: [
  ]
})
export class SensorEditorComponent implements OnInit {

  sensor?: Sensor;
  thing?: Thing;
  message?: Message;
  readOnly: boolean = false;
  header: string = '';

  constructor(private route: ActivatedRoute,
              private sensorService: SensorService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      map => {
        this.message = undefined;
        const thingId = +map.get('thingId')!;
        const sensorId = +map.get('sensorId')!;
        const templateSensorId =  this.route.snapshot.queryParamMap.get('templateSensorId');
        this.sensorService.findById(sensorId, thingId, templateSensorId ? +templateSensorId : undefined).subscribe(
          sensor => {
            this.sensor = sensor;
            this.header = this.sensor?.id ? `Edit Sensor ${this.sensor.name}` : 'Create New Sensor';
          }
        );
      }
    );
  }

  save(): void {
    this.sensorService.save(this.sensor!).subscribe(
      sensor => {
        this.sensor = sensor;
        this.message = {
          iconShape: 'check',
          styleClasses: 'alert-success',
          text: `Sensor ${this.sensor?.name} has been saved successfully`
        };
      }
    );
  }

}
