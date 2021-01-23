import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClrDatagridSortOrder } from '@clr/angular';
import { ConfirmDialogService } from 'src/app/shared/confirm-dialog/confirm-dialog.service';
import { Message } from 'src/app/shared/message';
import { ThingGroup } from '../thing-group';
import { ThingGroupService } from '../thing-group.service';

@Component({
  selector: 'app-thing-group-list',
  templateUrl: './thing-group-list.component.html'
})
export class ThingGroupListComponent implements OnInit {

  thingGroups: ThingGroup[] = [];
  message?: Message;
  sortType = ClrDatagridSortOrder.ASC;


  constructor(private thingGroupService: ThingGroupService,
              private confirmDialogService: ConfirmDialogService) { }

  ngOnInit(): void {
    this.message = undefined;
    this.thingGroupService.findAll().subscribe(
      thingGroups => {
        this.thingGroups = thingGroups;
      }
    );
  }

  delete(thingGroup: ThingGroup): void {
    this.confirmDialogService.show({
      buttonClasses: 'btn-danger',
      buttonText: 'Delete',
      iconClasses: 'is-danger',
      iconShape: 'exclamation-triangle',
      text: `Are you sure you want to delete thing group ${thingGroup.name}?`
    }).subscribe(
      value => {
        if(value) this._delete(thingGroup);
      }
    );
  }

  private _delete(thingGroup: ThingGroup): void {
    this.thingGroupService.delete(thingGroup.id!).subscribe(
      data => {
        this.thingGroups.splice(this.thingGroups.indexOf(thingGroup), 1);
        this.message = {
          iconShape: 'check',
          styleClasses: 'alert-success',
          text: `Thing group ${thingGroup.name} has been deleted successfully`
        };
    }
    );
  }

}
