import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { Trigger } from '../../trigger';
import { TriggerService } from '../../trigger.service';

@Component({
  selector: 'app-trigger-window',
  templateUrl: './trigger-window.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class TriggerWindowComponent implements OnInit {

  @Input() trigger: Trigger;
  readOnly: boolean = false;

  constructor(private triggerSerivce: TriggerService) {
    this.trigger = triggerSerivce.buildDefault();
  }

  ngOnInit(): void {
  }

}
