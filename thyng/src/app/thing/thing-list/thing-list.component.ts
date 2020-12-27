import { Component, OnInit } from '@angular/core';
import { Thing } from '../thing';

@Component({
  templateUrl: './thing-list.component.html'
})
export class ThingListComponent implements OnInit {

  errorMessage: string | undefined;
  successMessage: string | undefined;
  isLoading: boolean = true;
  things: Thing[] = [];
  isModalVisible: boolean = false;
  deletableThing: Thing | undefined;

  globalMessage: string = '';
  globalMessageClass: string = '';
  globalIconShape: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
