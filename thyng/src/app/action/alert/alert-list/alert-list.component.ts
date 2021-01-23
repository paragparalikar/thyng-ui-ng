import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClrDatagridSortOrder } from '@clr/angular';
import { ConfirmDialogService } from 'src/app/shared/confirm-dialog/confirm-dialog.service';
import { Message } from 'src/app/shared/message';
import { Action } from '../../action';
import { ActionService } from '../../action.service';

@Component({
  selector: 'app-alert-list',
  templateUrl: './alert-list.component.html',
  styles: [
  ]
})
export class AlertListComponent implements OnInit {

    message?: Message;
  actions: Action[] = [];
  sortType = ClrDatagridSortOrder.ASC;

  constructor(private route: ActivatedRoute,
              private actionService: ActionService,
              private confirmDialogService: ConfirmDialogService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      map => {
        this.actionService.findAll().subscribe(
          actions => {
            this.message = undefined;
            this.actions = actions;
          }
        );
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
