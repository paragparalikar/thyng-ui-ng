import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalMessageComponent } from './global-message/global-message.component';
import { LocalMessageComponent } from './local-message/local-message.component';
import { ClrIconModule, ClrModalModule } from '@clr/angular';
import { GlobalMessageService } from './global-message/global-message.service';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';



@NgModule({
  declarations: [GlobalMessageComponent, LocalMessageComponent, ConfirmDialogComponent],
  imports: [
    CommonModule,
    ClrIconModule,
    ClrModalModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports:[
    GlobalMessageComponent, LocalMessageComponent, ConfirmDialogComponent
  ]
})
export class SharedModule { }
