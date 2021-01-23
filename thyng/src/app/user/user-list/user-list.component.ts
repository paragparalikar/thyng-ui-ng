import { Component, OnInit } from '@angular/core';
import { ClrDatagridSortOrder } from '@clr/angular';
import { ConfirmDialogService } from 'src/app/shared/confirm-dialog/confirm-dialog.service';
import { Message } from 'src/app/shared/message';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styles: [
  ]
})
export class UserListComponent implements OnInit {

  users: User[] = [];
  message?: Message;
  sortType = ClrDatagridSortOrder.ASC;

  constructor(private userService: UserService,
    private confirmDialogService: ConfirmDialogService) { }

  ngOnInit(): void {
    this.message = undefined;
    this.userService.findAll().subscribe(
      users => this.users = users
    );
  }

  delete(user: User): void {
    this.confirmDialogService.show({
      buttonClasses: 'btn-danger',
      buttonText: 'Delete',
      iconClasses: 'is-danger',
      iconShape: 'exclamation-triangle',
      text: `Are you sure you want to delete user ${user.name}?`
    }).subscribe(
      value => {
        if(value) this._delete(user);
      }
    );
  }

  private _delete(user: User): void {
    this.userService.delete(user.id!).subscribe(
      result => {
        this.users.splice(this.users.indexOf(user), 1);
        this.message = {
          iconShape: 'check',
          styleClasses: 'alert-success',
          text: `User group ${user.name} has been deleted successfully`
        }
      }
    );
  }

}
