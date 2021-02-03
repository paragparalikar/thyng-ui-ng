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
      {path: 'home', component: LandingPageComponent},
      {path: 'things', loadChildren: () => import('../thing/thing.module').then(m => m.ThingModule)},
      {path: 'thing-groups', loadChildren: () => import('../thing-group/thing-group.module').then(m => m.ThingGroupModule)},
      {path: 'triggers', loadChildren: () => import('../trigger/trigger.module').then(m => m.TriggerModule)},
      {path: 'alerts', loadChildren: () => import('../action/alert/alert.module').then(m => m.AlertModule)},
      {path: 'users', loadChildren: () => import('../user/user.module').then(m => m.UserModule)},
      {path: 'user-groups', loadChildren: () => import('../user-group/user-group.module').then(m => m.UserGroupModule)}
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
