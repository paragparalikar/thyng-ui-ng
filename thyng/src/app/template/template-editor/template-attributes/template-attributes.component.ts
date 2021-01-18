import { Component, Input } from '@angular/core';
import { Attribute } from '../../attribute';
import { Template } from '../../template';

@Component({
  selector: 'app-template-attributes',
  templateUrl: './template-attributes.component.html',
  styles: [
  ]
})
export class TemplateAttributesComponent {

  @Input() templateabc!: Template;

  create(){
    this.templateabc.attributes.push({
      id: '',
      name: '',
      value: ''
    });
  }

  delete(attribute: Attribute){
    this.templateabc.attributes.splice(this.templateabc.attributes.indexOf(attribute), 1);
  }

}
