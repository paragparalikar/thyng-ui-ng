import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TenantListComponent } from './tenant-list/tenant-list.component';
import { AgGridModule } from 'ag-grid-angular';

const routes: Routes = [
  {path:'', component: TenantListComponent}
];

@NgModule({
  declarations: [TenantListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TenantModule { }
