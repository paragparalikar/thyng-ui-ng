import { Component, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'app-actuators',
  templateUrl: './actuators.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ActuatorsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
