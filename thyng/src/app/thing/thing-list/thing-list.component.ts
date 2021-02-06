import { Component } from '@angular/core';
import { ClrDatagridSortOrder, ClrDatagridStateInterface } from '@clr/angular';
import { ConfirmDialogService } from 'src/app/shared/confirm-dialog/confirm-dialog.service';
import { Message } from 'src/app/shared/message';
import { Pagination } from 'src/app/shared/page';
import { Thing } from '../thing';
import { ThingService } from '../thing.service';

@Component({templateUrl: './thing-list.component.html'})
export class ThingListComponent {

  things: Thing[] = [];
  message?: Message;
  sortType = ClrDatagridSortOrder.ASC;
  total: number = 0;
  loading: boolean = true;

  constructor(private thingService: ThingService,
              private confirmDialogService: ConfirmDialogService) { }

  refresh(state: ClrDatagridStateInterface) {
    this.loading = true;
    this.thingService.findPage(new Pagination<Thing>(state)).subscribe(
      pagination => {
        this.things = pagination.items;
        this.total = pagination.page.total;
        this.loading = false;
      }
    );
  }

  delete(thing: Thing): void {
    this.confirmDialogService.show({
      buttonClasses: 'btn-danger',
      buttonText: 'Delete',
      iconClasses: 'is-danger',
      iconShape: 'exclamation-triangle',
      text: `Are you sure you want to delete thing ${thing.name}?`
    }).subscribe(
      value => {
        if(value) this._delete(thing);
      }
    );
  }

  private _delete(thing: Thing): void {
    this.thingService.delete(thing.id!).subscribe(
      data => {
        this.things.splice(this.things.indexOf(thing), 1);
        this.message = {
          iconShape: 'check',
          styleClasses: 'alert-success',
          text: `Thing ${thing.name} has been deleted successfully`
        };
    }
    );
  }

}
