import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SensorService } from './sensor.service';
import { SensorEditorComponent } from './sensor-editor/sensor-editor.component';
import { SensorListComponent } from './sensor-list/sensor-list.component';



@NgModule({
  declarations: [SensorListComponent, SensorEditorComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class SensorModule { }
