import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/shared/message';
import { EventType } from '../event-type.enum';
import { Language } from '../language.enum';
import { Trigger } from '../trigger';

@Component({
  selector: 'app-trigger-editor',
  templateUrl: './trigger-editor.component.html',
  styles: [
  ]
})
export class TriggerEditorComponent implements OnInit {

  header: string = 'Create New Thing';
  message?: Message;
  trigger?: Trigger;
  readOnly: boolean = false;
  Language = Language;
  EventType = EventType;

  constructor() { }

  ngOnInit(): void {
  }

  save(): void {

  }

}
