import { KeyValue } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { Attribute } from 'src/app/template/attribute';
import { Thing } from '../../thing';

@Component({
  selector: 'app-thing-attributes',
  templateUrl: './thing-attributes.component.html',
  styles: [
  ]
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
