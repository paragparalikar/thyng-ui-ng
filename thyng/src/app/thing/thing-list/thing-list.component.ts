import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClrDatagridSortOrder } from '@clr/angular';
import { ConfirmDialogService } from 'src/app/shared/confirm-dialog/confirm-dialog.service';
import { Message } from 'src/app/shared/message';
import { Thing } from '../thing';
import { ThingStatus } from '../thing-status.enum';
import { ThingService } from '../thing.service';

@Component({templateUrl: './thing-list.component.html'})
export class ThingListComponent implements OnInit {

  things: Thing[] = [];
  message?: Message;
  ThingStatus = ThingStatus;
  sortType = ClrDatagridSortOrder.ASC;


  constructor(private route: ActivatedRoute,
              private thingService: ThingService,
              private confirmDialogService: ConfirmDialogService) { }

  ngOnInit(): void {
    this.message = undefined;
    this.route.data.subscribe(
      data => {
        this.things = data.things;
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
