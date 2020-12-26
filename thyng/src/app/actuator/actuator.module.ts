import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ActuatorListComponent } from './actuator-list/actuator-list.component';
import { ActuatorEditorComponent } from './actuator-editor/actuator-editor.component';



@NgModule({
  declarations: [ActuatorListComponent, ActuatorEditorComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class ActuatorModule { }
