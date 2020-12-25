import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { ClarityModule } from '@clr/angular';

const routes: Routes = [
  {path:'', component:HomeComponent,
    children:[
      {path: 'tenants', loadChildren: () => import('../tenant/tenant.module').then(m => m.TenantModule)}
    ]
  }
];

@NgModule({
  declarations: [HomeComponent], 
  imports: [
    CommonModule,
    ClarityModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class HomeModule { }
