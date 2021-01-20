import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { Attribute } from 'src/app/template/attribute';

@Component({
  selector: 'app-thing-attributes',
  templateUrl: './thing-attributes.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ThingAttributesComponent {

  @Input() attributes: Attribute[] = [];
  
  create(){
    this.attributes.push({
      id: '',
      name: '',
      value: ''
    });
  }

  delete(attribute: Attribute){
    this.attributes.splice(this.attributes.indexOf(attribute), 1);
  }


}
