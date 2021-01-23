import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { Attribute } from 'src/app/shared/attribute';
import { User } from '../../user';

@Component({
  selector: 'app-user-attributes',
  templateUrl: './user-attributes.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class UserAttributesComponent {

  @Input() user!: User;
  @Input() readOnly!: boolean;

  create(){
    this.user.attributes.push({
      id: '',
      name: '',
      value: ''
    });
  }

  delete(attribute: Attribute){
    this.user.attributes.splice(this.user.attributes.indexOf(attribute), 1);
  }
}
