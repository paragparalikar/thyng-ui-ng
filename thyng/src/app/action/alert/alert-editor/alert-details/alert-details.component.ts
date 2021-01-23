import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { Action } from 'src/app/action/action';
import { ActionType } from 'src/app/action/action-type.enum';

@Component({
  selector: 'app-alert-details',
  templateUrl: './alert-details.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class AlertDetailsComponent implements OnInit {

  @Input() action!: Action;
  @Input() readOnly!: boolean;
  ActionType = ActionType;

  constructor() { }

  ngOnInit(): void {
  }

}
