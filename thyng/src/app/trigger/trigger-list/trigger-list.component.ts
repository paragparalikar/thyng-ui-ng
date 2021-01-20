import { Component, OnInit } from '@angular/core';
import { ClrDatagridSortOrder } from '@clr/angular';
import { ConfirmDialogService } from 'src/app/shared/confirm-dialog/confirm-dialog.service';
import { Message } from 'src/app/shared/message';
import { EventType } from '../../shared/event-type.enum';
import { Language } from '../../shared/language.enum';
import { Trigger } from '../trigger';
import { TriggerService } from '../trigger.service';

@Component({
  templateUrl: './trigger-list.component.html',
})
export class TriggerListComponent implements OnInit {

  triggers: Trigger[] = [];
  message?: Message;
  Language = Language;
  EventType = EventType;
  sortType = ClrDatagridSortOrder.ASC;

  constructor(private triggerService: TriggerService,
              private confirmDialogService: ConfirmDialogService) { }

  ngOnInit(): void {
    this.triggerService.findAll().subscribe(
      triggers => {
        this.triggers = triggers;
        this.message = undefined;
      }
    );
  }

  delete(trigger: Trigger): void {
    this.confirmDialogService.show({
      buttonClasses: 'btn-danger',
      buttonText: 'Delete',
      iconClasses: 'is-danger',
      iconShape: 'exclamation-triangle',
      text: `Are you sure you want to delete trigger ${trigger.name}?`
    }).subscribe(
      value => {
        if(value) this._delete(trigger);
      }
    );
  }

  private _delete(trigger: Trigger){
    this.triggerService.delete(trigger.id!).subscribe(
      result => {
        this.triggers.splice(this.triggers.indexOf(trigger), 1);
        this.message = {
          iconShape: 'check',
          styleClasses: 'alert-success',
          text: `Trigger ${trigger.name} has been deleted successfully`
        };
      }
    );
  }

}
