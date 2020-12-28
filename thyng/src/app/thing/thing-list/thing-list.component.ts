import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfirmDialogService } from 'src/app/shared/confirm-dialog/confirm-dialog.service';
import { Thing } from '../thing';
import { ThingService } from '../thing.service';

@Component({templateUrl: './thing-list.component.html'})
export class ThingListComponent implements OnInit {

  things: Thing[] = [];

  constructor(private route: ActivatedRoute,
              private thingService: ThingService,
              private confirmDialogService: ConfirmDialogService) { }

  ngOnInit(): void {
    this.route.data.subscribe(
      data => this.things = data.things
    );
  }

}
