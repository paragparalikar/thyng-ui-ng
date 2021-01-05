import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { ClarityModule, ClrIconModule, ClrLayoutModule, ClrNavigationModule, ClrVerticalNavModule } from '@clr/angular';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ThingModule } from '../thing/thing.module';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {path:'', component:HomeComponent,
    children:[
      {path: 'landing', component: LandingPageComponent},
      {path: 'things', loadChildren: () => import('../thing/thing.module').then(m => m.ThingModule)}
    ]
  }
];

@NgModule({
  declarations: [HomeComponent, LandingPageComponent], 
  imports: [
    CommonModule,
    SharedModule,
    ClrIconModule,
    ClrLayoutModule,
    ClrNavigationModule,
    ClrVerticalNavModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class HomeModule { }
