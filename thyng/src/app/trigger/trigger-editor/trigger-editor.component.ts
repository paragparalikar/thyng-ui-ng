import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Message } from 'src/app/shared/message';
import { EventType } from '../../shared/event-type.enum';
import { Language } from '../../shared/language.enum';
import { Trigger } from '../trigger';
import { TriggerService } from '../trigger.service';

@Component({
  selector: 'app-trigger-editor',
  templateUrl: './trigger-editor.component.html',
  styles: [
  ]
})
export class TriggerEditorComponent implements OnInit {

  header: string = 'Create New Thing';
  message?: Message;
  trigger: Trigger;
  readOnly: boolean = false;
  Language = Language;
  EventType = EventType;

  constructor(private route: ActivatedRoute,
              private triggerService: TriggerService) { 
    this.trigger = triggerService.buildDefault();
  }

  ngOnInit(): void {
    this.message = undefined;
    this.route.paramMap.subscribe(
      map => {
        this.triggerService.findById(map.get('triggerId')!).subscribe(
          trigger => {
            this.trigger = trigger;
            this.header = this.trigger?.id ? `Edit ${this.trigger.name}` : 'Create New Trigger'
          }
        );
      }
    );
  }

  save(): void {
    this.triggerService.save(this.trigger).subscribe(
      trigger => {
        this.trigger = trigger;
        this.message = {
          iconShape: 'check',
          styleClasses: 'alert-success',
          text: `Trigger ${this.trigger.name} has been saved successfully`
        };
      }
    );
  }

}
