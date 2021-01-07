import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ThingListComponent } from './thing-list/thing-list.component';
import { ThingEditorComponent } from './thing-editor/thing-editor.component';
import { Routes, RouterModule } from '@angular/router';
import { ClrButtonGroupModule, ClrButtonModule, ClrDatagridModule, ClrFormsModule, ClrIconModule, ClrTabsModule, ClrTextareaModule } from '@clr/angular';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ThingDetailsComponent } from './thing-editor/thing-details/thing-details.component';
import { SensorsComponent } from './thing-editor/sensors/sensors.component';
import { ActuatorsComponent } from './thing-editor/actuators/actuators.component';

const routes: Routes = [
  {path:'', component: ThingListComponent},
  {path:':thingId', component: ThingEditorComponent}
];


@NgModule({
  declarations: [ThingListComponent, ThingEditorComponent, ThingDetailsComponent, SensorsComponent, ActuatorsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    ClrDatagridModule,
    FormsModule,
    ClrFormsModule,
    ClrIconModule,
    ClrButtonModule,
    ClrButtonGroupModule,
    ClrTextareaModule,
    ClrTabsModule,
    RouterModule.forChild(routes)
  ]
})
export class ThingModule { }
