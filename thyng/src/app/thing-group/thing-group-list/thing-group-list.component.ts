import { Component } from '@angular/core';
import { ClrDatagridSortOrder, ClrDatagridStateInterface } from '@clr/angular';
import { ConfirmDialogService } from 'src/app/shared/confirm-dialog/confirm-dialog.service';
import { Message } from 'src/app/shared/message';
import { Pagination } from 'src/app/shared/page';
import { ThingGroup } from '../thing-group';
import { ThingGroupService } from '../thing-group.service';

@Component({
  selector: 'app-thing-group-list',
  templateUrl: './thing-group-list.component.html'
})
export class ThingGroupListComponent {

  thingGroups: ThingGroup[] = [];
  message?: Message;
  sortType = ClrDatagridSortOrder.ASC;
  total: number = 0;
  loading: boolean = true;


  constructor(private thingGroupService: ThingGroupService,
              private confirmDialogService: ConfirmDialogService) { }

  refresh(state: ClrDatagridStateInterface) {
    this.loading = true;
    this.thingGroupService.findPage(new Pagination<ThingGroup>(state)).subscribe(
      page => {
        this.thingGroups = page.items;
        this.loading = false;
        this.total = page.page.total;
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
        let index = this.thingGroups.indexOf(thingGroup);
        if(-1 < index) this.thingGroups.splice(index, 1);
        this.message = {
          iconShape: 'check',
          styleClasses: 'alert-success',
          text: `Thing group ${thingGroup.name} has been deleted successfully`
        };
    }
    );
  }

}
