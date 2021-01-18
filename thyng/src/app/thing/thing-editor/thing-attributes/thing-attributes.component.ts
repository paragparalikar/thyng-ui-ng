import { Component, Input } from '@angular/core';
import { Attribute } from 'src/app/template/attribute';

@Component({
  selector: 'app-thing-attributes',
  templateUrl: './thing-attributes.component.html',
  styles: [
  ]
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
