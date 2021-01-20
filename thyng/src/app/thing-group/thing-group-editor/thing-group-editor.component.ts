import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Message } from 'src/app/shared/message';
import { ThingGroup } from '../thing-group';
import { ThingGroupType } from '../thing-group-type.enum';
import { ThingGroupService } from '../thing-group.service';

@Component({
  templateUrl: './thing-group-editor.component.html',
})
export class ThingGroupEditorComponent implements OnInit {

  thingGroup: ThingGroup;
  message?: Message;
  ThingGroupType = ThingGroupType;
  readOnly: boolean = false;
  header: string = 'Create New Thing Group'

  constructor(private route: ActivatedRoute,
    private thingGroupService: ThingGroupService) { 
      this.thingGroup = thingGroupService.buildDefault();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      map => {
        this.message = undefined;
        const thingGroupId = map.get('thingGroupId')!;
        this.thingGroupService.findById(thingGroupId).subscribe(
          thingGroup => {
            this.thingGroup = thingGroup;
            this.readOnly = false; // check if user has access to edit things
            this.header = this.thingGroup?.id ? `Edit ${this.thingGroup.name}` : 'Create New Thing Group'
          }
        );
      }
    );
  }

  save(): void {
    if(this.thingGroup){
      this.thingGroupService.save(this.thingGroup).subscribe(
        result => {
          this.thingGroup = result;
          this.message = {
            iconShape: 'check',
            styleClasses: 'alert-success',
            text: `Thing Group ${this.thingGroup?.name} has been saved successfully`
          };
        }
      );
    }
  }
}
