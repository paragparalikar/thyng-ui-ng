import { Component } from '@angular/core';
import { ClrDatagridSortOrder, ClrDatagridStateInterface } from '@clr/angular';
import { ConfirmDialogService } from 'src/app/shared/confirm-dialog/confirm-dialog.service';
import { Message } from 'src/app/shared/message';
import { Pagination } from 'src/app/shared/page';
import { UserGroup } from '../user-group';
import { UserGroupService } from '../user-group.service';

@Component({
  selector: 'app-user-group-list',
  templateUrl: './user-group-list.component.html',
  styles: [
  ]
})
export class UserGroupListComponent {

  userGroups: UserGroup[] = [];
  message?: Message;
  sortType = ClrDatagridSortOrder.ASC;
  total: number = 0;
  loading: boolean = true;

  constructor(private userGroupService: UserGroupService,
              private confirmDialogService: ConfirmDialogService) { }

  refresh(state: ClrDatagridStateInterface) {
    this.loading = true;
    this.userGroupService.findPage(new Pagination(state)).subscribe(
      page => {
        this.userGroups = page.items;
        this.total = page.page.total;
        this.loading = false;
      }
    );
  }


  delete(userGroup: UserGroup): void {
    this.confirmDialogService.show({
      buttonClasses: 'btn-danger',
      buttonText: 'Delete',
      iconClasses: 'is-danger',
      iconShape: 'exclamation-triangle',
      text: `Are you sure you want to delete user group ${userGroup.name}?`
    }).subscribe(
      value => {
        if(value) this._delete(userGroup);
      }
    );
  }

  private _delete(userGroup: UserGroup): void {
    this.userGroupService.delete(userGroup.id!).subscribe(
      result => {
        this.userGroups.splice(this.userGroups.indexOf(userGroup), 1);
        this.message = {
          iconShape: 'check',
          styleClasses: 'alert-success',
          text: `User group ${userGroup.name} has been deleted successfully`
        }
      }
    );
  }


}
