import { Component, Input, OnInit } from '@angular/core';
import { AttributesTransformer } from 'src/app/shared/transforms/attributes-transformer';
import { Thing } from '../../thing';
import { ThingStatus } from '../../thing-status.enum';
import { ThingService } from '../../thing.service';

@Component({
  selector: 'app-thing-details',
  templateUrl: './thing-details.component.html',
  styles: [
  ]
})
export class ThingDetailsComponent implements OnInit {

  _thing: Thing;
  attributes?: string;
  ThingStatus = ThingStatus;
  readOnly: boolean = false;

  constructor(
    private thingService: ThingService,
    private attributeTransformer: AttributesTransformer) { 
      this._thing = thingService.buildDefault();
    }

  ngOnInit(): void {
  }

  @Input()
  get thing(): Thing { 
    return this._thing; 
  }
  set thing(thing: Thing) {
    this._thing = thing;
    this.attributes = this.attributeTransformer.from(thing.attributes);
  }

}
