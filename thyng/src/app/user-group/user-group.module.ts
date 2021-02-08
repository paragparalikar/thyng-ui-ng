import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserGroupListComponent } from './user-group-list/user-group-list.component';
import { UserGroupEditorComponent } from './user-group-editor/user-group-editor.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ClrDatagridModule, ClrFormsModule, ClrIconModule, ClrButtonModule, ClrButtonGroupModule, ClrTextareaModule, ClrTabsModule, ClrSelectModule, ClrRadioModule } from '@clr/angular';
import { SharedModule } from '../shared/shared.module';
import { UserGroupNameValidatorDirective } from './user-group-editor/user-group-name-validator.directive';

const routes: Routes = [
  {path:'', component: UserGroupListComponent},
  {path:':userGroupId', component: UserGroupEditorComponent}
];

@NgModule({
  declarations: [UserGroupListComponent, UserGroupEditorComponent, UserGroupNameValidatorDirective],
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
export class UserGroupModule { }
