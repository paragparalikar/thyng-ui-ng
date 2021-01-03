import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  readOnly: boolean = true;
  header: string = '';

  constructor(private route: ActivatedRoute,
              private sensorService: SensorService) { }

  ngOnInit(): void {
    this.route.data.subscribe(
      data => {
        this.message = undefined;
        this.sensor = data.sensor;
        this.thing = data.thing;
      }
    );
  }

}
