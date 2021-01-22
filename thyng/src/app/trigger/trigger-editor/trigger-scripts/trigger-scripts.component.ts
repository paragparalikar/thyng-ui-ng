import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { Trigger } from '../../trigger';
import { TriggerService } from '../../trigger.service';

@Component({
  selector: 'app-trigger-scripts',
  templateUrl: './trigger-scripts.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class TriggerScriptsComponent implements OnInit {

  @Input() trigger!: Trigger;
  @Input() readOnly: boolean = false;

  constructor(private triggerSerivce: TriggerService) {}

  ngOnInit(): void {
  }

}
