import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ThingListComponent } from './thing-list/thing-list.component';
import { ThingEditorComponent } from './thing-editor/thing-editor.component';
import { Routes, RouterModule } from '@angular/router';
import { ClrButtonGroupModule, ClrButtonModule, ClrDatagridModule, ClrFormsModule, ClrIconModule, ClrSelectModule, ClrTabsModule, ClrTextareaModule } from '@clr/angular';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ThingDetailsComponent } from './thing-editor/thing-details/thing-details.component';
import { ThingAttributesComponent } from './thing-editor/thing-attributes/thing-attributes.component';
import { ActuatorsComponent } from './thing-editor/actuators/actuators.component';
import { SensorsComponent } from './thing-editor/sensors/sensors.component';

const routes: Routes = [
  {path:'', component: ThingListComponent},
  {path:':thingId', component: ThingEditorComponent}
];


@NgModule({
  declarations: [ThingListComponent, ThingEditorComponent, ThingDetailsComponent, ThingAttributesComponent, SensorsComponent, ActuatorsComponent],
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
    ClrSelectModule,
    RouterModule.forChild(routes)
  ]
})
export class ThingModule { }
