import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserEditorComponent } from './user-editor/user-editor.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ClrDatagridModule, ClrFormsModule, ClrIconModule, ClrButtonModule, ClrButtonGroupModule, ClrTextareaModule, ClrTabsModule, ClrSelectModule, ClrRadioModule } from '@clr/angular';
import { SharedModule } from '../shared/shared.module';
import { UserDetailsComponent } from './user-editor/user-details/user-details.component';
import { UserAttributesComponent } from './user-editor/user-attributes/user-attributes.component';

const routes: Routes = [
  {path:'', component: UserListComponent},
  {path:':userId', component: UserEditorComponent}
];


@NgModule({
  declarations: [UserListComponent, UserEditorComponent, UserDetailsComponent, UserAttributesComponent],
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
export class UserModule { }
