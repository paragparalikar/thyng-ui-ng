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
    this.route.data.subscribe(
      data => {
        this.message = undefined;
        this.sensor = data.sensor;
        this.thing = data.thing;
        this.header = this.sensor?.id ? `Edit Sensor ${this.sensor.name}` : 'Create New Sensor';
      }
    );
    this.route.queryParamMap.subscribe(
      params => {
        this.readOnly = 'true' === params.get('readOnly');
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
