import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TenantRoutingModule } from './tenant-routing.module';
import { TenantListComponent } from './tenant-list/tenant-list.component';


@NgModule({
  declarations: [TenantListComponent],
  imports: [
    CommonModule,
    TenantRoutingModule
  ]
})
export class TenantModule { }
