import { Component, OnInit } from '@angular/core';
import { ConfirmDialogOptions } from './confirm-dialog-options';
import { ConfirmDialogService } from './confirm-dialog.service';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styles: [
  ]
})
export class ConfirmDialogComponent implements OnInit {

  isModalVisible: boolean = false;
  options?: ConfirmDialogOptions;

  constructor(private confirmDialogService: ConfirmDialogService) { }

  ngOnInit(): void {
    this.confirmDialogService.options().subscribe(
      options => this.options = options
    );
  }

  confirm(): void {
    this.confirmDialogService.action();
  }

}
