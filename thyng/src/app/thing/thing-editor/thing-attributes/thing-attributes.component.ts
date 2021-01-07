import { KeyValue } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { Thing } from '../../thing';

@Component({
  selector: 'app-thing-attributes',
  templateUrl: './thing-attributes.component.html',
  styles: [
  ]
})
export class ThingAttributesComponent {

  private _thing!: Thing;
  attributes: [string, string][] = [];

  @Input()
  get thing(): Thing {
    return this._thing!;
  }
  set thing(thing: Thing) {
    this._thing = thing;
    this.attributes = Object.entries<string>(thing.attributes);
  }

  create(){
    this.attributes.push(['','']);
    this.update();
  }

  update(){
    this._thing.attributes = {};
    this.attributes.forEach(attribute => {
      this._thing.attributes[attribute[0]] = attribute[1];
    });
  }

  delete(attribute: [string, string]){
    this.attributes.splice(this.attributes.indexOf(attribute), 1);
    this.update();
  }

}
