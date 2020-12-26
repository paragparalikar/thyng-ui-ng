import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClipboardModule } from 'ngx-clipboard';
import { SensorModule } from './sensor/sensor.module';
import { ActuatorModule } from './actuator/actuator.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HomeModule,
    ClarityModule,
    ClipboardModule,
    BrowserAnimationsModule,
    SensorModule,
    ActuatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
