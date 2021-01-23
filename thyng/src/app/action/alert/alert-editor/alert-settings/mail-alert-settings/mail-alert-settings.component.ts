import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { Action } from 'src/app/action/action';

@Component({
  selector: 'app-mail-alert-settings',
  templateUrl: './mail-alert-settings.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class MailAlertSettingsComponent implements OnInit {

  @Input() action!: Action;
  @Input() readOnly!: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  create(){
    this.action.to?.push('recipient@domain.com');
  }

}
