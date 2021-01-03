import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ClrDatagridModule, ClrFormsModule, ClrIconModule, ClrButtonModule, ClrButtonGroupModule, ClrTextareaModule } from '@clr/angular';
import { SharedModule } from '../shared/shared.module';
import { TriggerListComponent } from './trigger-list/trigger-list.component';
import { TriggerEditorComponent } from './trigger-editor/trigger-editor.component';

const routes: Routes = [
  {path:'', component: TriggerListComponent},
  {path:':triggerId', component: TriggerEditorComponent}
];

@NgModule({
  declarations: [TriggerListComponent, TriggerEditorComponent],
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
    RouterModule.forChild(routes)
  ]
})
export class TriggerModule { }
