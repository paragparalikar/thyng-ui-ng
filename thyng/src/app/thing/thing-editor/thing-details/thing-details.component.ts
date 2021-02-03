import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { Thing } from '../../thing';
import { ThingService } from '../../thing.service';

@Component({
  selector: 'app-thing-details',
  templateUrl: './thing-details.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ThingDetailsComponent {

  @Input() thing: Thing;
  readOnly: boolean = false;

  constructor(private thingService: ThingService) { 
      this.thing = thingService.buildDefault();
  }

}
