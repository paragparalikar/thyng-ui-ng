import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { ClarityModule } from '@clr/angular';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ThingModule } from '../thing/thing.module';

const routes: Routes = [
  {path:'', component:HomeComponent,
    children:[
      {path: 'landing', component: LandingPageComponent},
      {path: 'tenants', loadChildren: () => import('../tenant/tenant.module').then(m => m.TenantModule)}
    ]
  }
];

@NgModule({
  declarations: [HomeComponent, LandingPageComponent], 
  imports: [
    CommonModule,
    ClarityModule,
    RouterModule.forChild(routes),
    ThingModule
  ],
  exports: [RouterModule]
})
export class HomeModule { }
