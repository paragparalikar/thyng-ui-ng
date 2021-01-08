import { Component, Input, OnInit } from '@angular/core';
import { Trigger } from '../../trigger';
import { TriggerService } from '../../trigger.service';

@Component({
  selector: 'app-trigger-scripts',
  templateUrl: './trigger-scripts.component.html',
  styles: [
  ]
})
export class TriggerScriptsComponent implements OnInit {

  @Input() trigger: Trigger;
  readOnly: boolean = false;

  constructor(private triggerSerivce: TriggerService) {
    this.trigger = triggerSerivce.buildDefault();
  }

  ngOnInit(): void {
  }

}
