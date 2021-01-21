import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { ThingGroup } from '../../thing-group';

@Component({
  selector: 'app-thing-group-script',
  templateUrl: './thing-group-script.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ThingGroupScriptComponent {

  @Input() thingGroup!: ThingGroup;
  @Input() readOnly!: boolean;
}
