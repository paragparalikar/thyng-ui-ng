import { Component } from '@angular/core';
import { ClrDatagridSortOrder, ClrDatagridStateInterface } from '@clr/angular';
import { ConfirmDialogService } from 'src/app/shared/confirm-dialog/confirm-dialog.service';
import { Message } from 'src/app/shared/message';
import { Filter, Pagination } from 'src/app/shared/page';
import { Action } from '../../action';
import { ActionType } from '../../action-type.enum';
import { ActionService } from '../../action.service';

@Component({
  selector: 'app-alert-list',
  templateUrl: './alert-list.component.html',
  styles: [
  ]
})
export class AlertListComponent {
    
  actions: Action[] = [];
  message?: Message;
  sortType = ClrDatagridSortOrder.ASC;
  ActionType = ActionType;
  total: number = 0;
  loading: boolean = true;
  alertTypeFilter: Filter = {
    property: 'type',
    value: ActionType.ALERT
  };

  constructor(private actionService: ActionService,
  private confirmDialogService: ConfirmDialogService) { }

  refresh(state: ClrDatagridStateInterface) {
    this.loading = true;
    const page = new Pagination<Action>(state);
    page.filter.push(this.alertTypeFilter);
    this.actionService.findPage(page, ActionType.ALERT).subscribe(
      pagination => {
        this.actions = pagination.items;
        this.total = pagination.page.total;
        this.loading = false;
      }
    );
  }

  delete(action: Action) {
    this.confirmDialogService.show({
      buttonClasses: 'btn-danger',
      buttonText: 'Delete',
      iconClasses: 'is-danger',
      iconShape: 'exclamation-triangle',
      text: `Are you sure you want to delete alert ${action.name}?`
    }).subscribe(
      value => {
        if(value) this._delete(action);
      }
    );
  }

  private _delete(action: Action): void {
    this.actionService.delete(action.id!).subscribe(
      data => {
        this.actions.splice(this.actions.indexOf(action), 1);
        this.message = {
          iconShape: 'check',
          styleClasses: 'alert-success',
          text: `Alert ${action.name} has been deleted successfully`
        };
      }
    );
  }

}
