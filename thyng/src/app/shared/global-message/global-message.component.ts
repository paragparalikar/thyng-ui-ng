import { Component, Input, OnInit } from '@angular/core';
import { Message } from '../message';
import { GlobalMessageService } from './global-message.service';

@Component({
  selector: 'app-global-message',
  templateUrl: './global-message.component.html',
  styles: [
  ]
})
export class GlobalMessageComponent implements OnInit {

  message?: Message;
  isMessageVisible: boolean = true;

  constructor(private globalMessageService: GlobalMessageService) { }

  ngOnInit(): void {
    this.globalMessageService.getMessage().subscribe(
      message => {
        this.message = message;
        this.isMessageVisible = message ? true : false;
      }
    );
  }

}
