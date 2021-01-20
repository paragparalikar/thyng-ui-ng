import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { ClrIconModule, ClrLayoutModule, ClrNavigationModule, ClrVerticalNavModule } from '@clr/angular';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {path:'', component:HomeComponent,
    children:[
      {path: 'landing', component: LandingPageComponent},
      {path: 'templates', loadChildren: () => import('../template/template.module').then(m => m.TemplateModule)},
      {path: 'things', loadChildren: () => import('../thing/thing.module').then(m => m.ThingModule)},
      {path: 'thing-groups', loadChildren: () => import('../thing-group/thing-group.module').then(m => m.ThingGroupModule)},
      {path: 'triggers', loadChildren: () => import('../trigger/trigger.module').then(m => m.TriggerModule)}
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
