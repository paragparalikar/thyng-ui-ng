import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SensorEditorComponent } from './sensor-editor/sensor-editor.component';
import { SensorListComponent } from './sensor-list/sensor-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ClrDatagridModule, ClrFormsModule, ClrIconModule } from '@clr/angular';
import { ClipboardModule } from 'ngx-clipboard';
import { SharedModule } from '../shared/shared.module';
import { SensorListResolver } from './sensor-list/sensor-list.resolver';
import { ThingResolver } from '../thing/thing-editor/thing.resolver';
import { SensorResolver } from './sensor-editor/sensor.resolver';

const routes: Routes = [
  {path:'', component: SensorListComponent, resolve: {thing: ThingResolver, sensors: SensorListResolver}},
  {path:':sensorId', component: SensorEditorComponent, resolve: {thing: ThingResolver, sensor: SensorResolver}}
];

@NgModule({
  declarations: [SensorListComponent, SensorEditorComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    ClrDatagridModule,
    FormsModule,
    ClrFormsModule,
    ClrIconModule,
    ClipboardModule,
    RouterModule.forChild(routes)
  ]
})
export class SensorModule { }
