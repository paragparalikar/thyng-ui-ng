import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TenantListComponent } from './tenant-list/tenant-list.component';
import { AgGridModule } from 'ag-grid-angular';
import { ClrDatagridModule, ClrFormsModule, ClrIconModule } from '@clr/angular';
import { ClipboardModule } from 'ngx-clipboard';
import { TenantEditorComponent } from './tenant-editor/tenant-editor.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {path:'', component: TenantListComponent},
  {path:':id', component: TenantEditorComponent}
];

@NgModule({
  declarations: [TenantListComponent, TenantEditorComponent],
  imports: [
    CommonModule,
    ClrDatagridModule,
    ClrIconModule,
    FormsModule,
    ClrFormsModule,
    ClipboardModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TenantModule { }
