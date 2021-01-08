import { Component, Input, OnInit } from '@angular/core';
import { Trigger } from '../../trigger';
import { TriggerService } from '../../trigger.service';

@Component({
  selector: 'app-trigger-window',
  templateUrl: './trigger-window.component.html',
  styles: [
  ]
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
