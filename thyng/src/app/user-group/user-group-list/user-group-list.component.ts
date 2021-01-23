import { Component, OnInit } from '@angular/core';
import { ClrDatagridSortOrder } from '@clr/angular';
import { ConfirmDialogService } from 'src/app/shared/confirm-dialog/confirm-dialog.service';
import { Message } from 'src/app/shared/message';
import { UserGroup } from '../user-group';
import { UserGroupService } from '../user-group.service';

@Component({
  selector: 'app-user-group-list',
  templateUrl: './user-group-list.component.html',
  styles: [
  ]
})
export class UserGroupListComponent implements OnInit {

  userGroups: UserGroup[] = [];
  message?: Message;
  sortType = ClrDatagridSortOrder.ASC;

  constructor(private userGroupService: UserGroupService,
              private confirmDialogService: ConfirmDialogService) { }

  ngOnInit(): void {
    this.message = undefined;
    this.userGroupService.findAll().subscribe(
      userGroups => this.userGroups = userGroups
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
