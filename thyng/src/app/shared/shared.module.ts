import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalMessageComponent } from './global-message/global-message.component';
import { LocalMessageComponent } from './local-message/local-message.component';
import { ClrIconModule, ClrModalModule } from '@clr/angular';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { MinDirective } from './validation/min.directive';



@NgModule({
  declarations: [GlobalMessageComponent, LocalMessageComponent, ConfirmDialogComponent, MinDirective],
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
