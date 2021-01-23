import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { Attribute } from '../../../shared/attribute';
import { Template } from '../../template';

@Component({
  selector: 'app-template-attributes',
  templateUrl: './template-attributes.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class TemplateAttributesComponent {

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
