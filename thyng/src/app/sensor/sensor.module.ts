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

const routes: Routes = [
  {path:'', component: SensorListComponent},
  {path:':sensorId', component: SensorEditorComponent}
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
    RouterModule.forChild(routes)
  ]
})
export class SensorModule { }
