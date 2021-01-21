import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { EventType } from 'src/app/shared/event-type.enum';
import { ThingGroup } from 'src/app/thing-group/thing-group';
import { ThingGroupService } from 'src/app/thing-group/thing-group.service';
import { Trigger } from '../../trigger';
import { TriggerService } from '../../trigger.service';

@Component({
  selector: 'app-trigger-details',
  templateUrl: './trigger-details.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class TriggerDetailsComponent implements OnInit {

  EventType = EventType;
  @Input() trigger: Trigger;
  @Input() readOnly: boolean = false;
  thingGroups: ThingGroup[] = [];
  selectedThingGroups: ThingGroup[] = [];

  constructor(private triggerSerivce: TriggerService,
              private thingGroupService: ThingGroupService) {
    this.trigger = triggerSerivce.buildDefault();
  }

  ngOnInit(): void {
    this.thingGroupService.findAll().subscribe(
      thingGroups => {
        this.thingGroups = thingGroups;
        this.selectedThingGroups = thingGroups
          .filter(group => this.trigger.thingGroupIds.includes(group.id!));
      }
    );
  }

  onThingGroupSelectionChanged(thingGroups: ThingGroup[]){
    this.trigger.thingGroupIds = thingGroups.map(group => group.id!);
  }
}
