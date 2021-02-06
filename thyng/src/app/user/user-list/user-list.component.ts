import { Component } from '@angular/core';
import { ClrDatagridSortOrder, ClrDatagridStateInterface } from '@clr/angular';
import { ConfirmDialogService } from 'src/app/shared/confirm-dialog/confirm-dialog.service';
import { Message } from 'src/app/shared/message';
import { Pagination } from 'src/app/shared/page';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styles: [
  ]
})
export class UserListComponent {

  users: User[] = [];
  message?: Message;
  sortType = ClrDatagridSortOrder.ASC;
  total: number = 0;
  loading: boolean = true;

  constructor(private userService: UserService,
    private confirmDialogService: ConfirmDialogService) { }

    refresh(state: ClrDatagridStateInterface) {
      this.loading = true;
      this.userService.findPage(new Pagination(state)).subscribe(
        page => {
          this.users = page.items;
          this.loading = false;
          this.total = page.page.total;
        }
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
