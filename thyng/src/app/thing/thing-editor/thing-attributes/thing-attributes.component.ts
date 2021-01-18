import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { Attribute } from 'src/app/template/attribute';
import { Thing } from '../../thing';

@Component({
  selector: 'app-thing-attributes',
  templateUrl: './thing-attributes.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ThingAttributesComponent {

  @Input() thing!: Thing;
  
  create(){
    this.thing.attributes.push({
      id: '',
      name: '',
      value: ''
    });
  }

  delete(attribute: Attribute){
    this.thing.attributes.splice(this.thing.attributes.indexOf(attribute), 1);
  }

}
