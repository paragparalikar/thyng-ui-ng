import { Component, Input, OnInit } from '@angular/core';
import { Message } from '../message';

@Component({
  selector: 'app-local-message',
  templateUrl: './local-message.component.html',
  styles: [
  ]
})
export class LocalMessageComponent implements OnInit {

  _message?: Message;
  isMessageVisible: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  get message(): Message | undefined{
    return this._message;
  }
  set message(message: Message | undefined){
    this._message = message;
    this.isMessageVisible = message ? true : false;
  }
}
