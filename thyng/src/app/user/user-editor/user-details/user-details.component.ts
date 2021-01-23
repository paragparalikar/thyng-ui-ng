import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { User } from '../../user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class UserDetailsComponent implements OnInit {

  @Input() user!: User;
  @Input() readOnly!: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
