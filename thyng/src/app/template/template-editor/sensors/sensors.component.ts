import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { ConfirmDialogService } from 'src/app/shared/confirm-dialog/confirm-dialog.service';
import { Sensor } from './sensor';

@Component({
  selector: 'app-sensors',
  templateUrl: './sensors.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class SensorsComponent implements OnInit {

  @Input() sensors: Sensor[] = [];

  constructor(private confirmDialogService: ConfirmDialogService) { }

  ngOnInit(): void {
  }

  buildDefault(): Sensor{
    return {
      id: undefined,
      name: '',
      unit: ''
    };
  }

  create(){
    this.sensors.push(this.buildDefault());
  }

  delete(sensor: Sensor) {
    this.confirmDialogService.show({
      buttonClasses: 'btn-danger',
      buttonText: 'Delete',
      iconClasses: 'is-danger',
      iconShape: 'exclamation-triangle',
      text: `Are you sure you want to delete sensor ${sensor.name}?`
    }).subscribe(
      value => {
        if(value) {
          this.sensors.splice(this.sensors.indexOf(sensor), 1);
        }
      }
    );
  }
}
