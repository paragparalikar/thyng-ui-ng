import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AlertListComponent } from './alert-list/alert-list.component';
import { AlertEditorComponent } from './alert-editor/alert-editor.component';
import { AlertDetailsComponent } from './alert-editor/alert-details/alert-details.component';
import { AlertSettingsComponent } from './alert-editor/alert-settings/alert-settings.component';
import { ClrButtonGroupModule, ClrButtonModule, ClrDatagridModule, ClrFormsModule, ClrIconModule, ClrSelectModule, ClrTabsModule, ClrTextareaModule } from '@clr/angular';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { MailAlertSettingsComponent } from './alert-editor/alert-settings/mail-alert-settings/mail-alert-settings.component';

const routes: Routes = [
  {path:'', component: AlertListComponent},
  {path:':actionId', component: AlertEditorComponent}
];

@NgModule({
  declarations: [AlertListComponent, AlertEditorComponent, AlertDetailsComponent, AlertSettingsComponent, MailAlertSettingsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    ClrDatagridModule,
    FormsModule,
    ClrFormsModule,
    ClrIconModule,
    ClrButtonModule,
    ClrButtonGroupModule,
    ClrTextareaModule,
    ClrTabsModule,
    ClrSelectModule,
    RouterModule.forChild(routes)
  ]
})
export class AlertModule { }
