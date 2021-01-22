import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ClrDatagridModule, ClrFormsModule, ClrIconModule, ClrButtonModule, ClrButtonGroupModule, ClrTextareaModule, ClrInputModule, ClrTabsModule, ClrComboboxModule, ClrSelectModule } from '@clr/angular';
import { SharedModule } from '../shared/shared.module';
import { TriggerListComponent } from './trigger-list/trigger-list.component';
import { TriggerEditorComponent } from './trigger-editor/trigger-editor.component';
import { TriggerDetailsComponent } from './trigger-editor/trigger-details/trigger-details.component';
import { TriggerScriptsComponent } from './trigger-editor/trigger-scripts/trigger-scripts.component';
import { TriggerWindowComponent } from './trigger-editor/trigger-window/trigger-window.component';

const routes: Routes = [
  {path:'', component: TriggerListComponent},
  {path:':triggerId', component: TriggerEditorComponent}
];

@NgModule({
  declarations: [TriggerListComponent, TriggerEditorComponent, TriggerDetailsComponent, TriggerScriptsComponent, TriggerWindowComponent],
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
    ClrDatagridModule,
    ClrInputModule,
    ClrTabsModule,
    ClrComboboxModule,
    ClrSelectModule,
    RouterModule.forChild(routes)
  ]
})
export class TriggerModule { }
