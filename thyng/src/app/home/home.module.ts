import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { ClarityModule } from '@clr/angular';
import { HomeRoutingModule } from './home-routing.module';
import { NavigationComponent } from './navigation/navigation.component';


@NgModule({
  declarations: [HomeComponent, NavigationComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    ClarityModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
