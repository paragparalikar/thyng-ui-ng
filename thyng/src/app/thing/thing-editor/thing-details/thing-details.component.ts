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

  @Input() thing: Thing;
  ThingStatus = ThingStatus;
  readOnly: boolean = false;

  constructor(private thingService: ThingService) { 
      this.thing = thingService.buildDefault();
    }

  ngOnInit(): void {
  }

}
