import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { ThingGroup } from '../../thing-group';

@Component({
  selector: 'app-thing-group-details',
  templateUrl: './thing-group-details.component.html',
  styleUrls: ['./thing-group-details.component.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ThingGroupDetailsComponent {

  @Input() thingGroup!: ThingGroup;
  @Input() readOnly!: boolean;

}
