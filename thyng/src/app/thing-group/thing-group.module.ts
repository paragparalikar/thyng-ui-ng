import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ClrDatagridModule, ClrFormsModule, ClrIconModule, ClrButtonModule, ClrButtonGroupModule, ClrTextareaModule, ClrTabsModule, ClrSelectModule, ClrRadioModule } from '@clr/angular';
import { ThingGroupListComponent } from './thing-group-list/thing-group-list.component';
import { ThingGroupEditorComponent } from './thing-group-editor/thing-group-editor.component';
import { ThingGroupNameValidatorDirective } from './thing-group-editor/thing-group-name-validator.directive';

const routes: Routes = [
  {path:'', component: ThingGroupListComponent},
  {path:':thingGroupId', component: ThingGroupEditorComponent}
];

@NgModule({
  declarations: [ThingGroupListComponent, ThingGroupEditorComponent, ThingGroupNameValidatorDirective],
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
    ClrRadioModule,
    RouterModule.forChild(routes)
  ]
})
export class ThingGroupModule { }
