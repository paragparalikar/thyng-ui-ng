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

  @Input() template!: Template;

  create(){
    this.template.attributes.push({
      id: '',
      name: '',
      value: ''
    });
  }

  delete(attribute: Attribute){
    this.template.attributes.splice(this.template.attributes.indexOf(attribute), 1);
  }

}
