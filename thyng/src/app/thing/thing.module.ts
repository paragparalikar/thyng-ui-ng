import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ThingListComponent } from './thing-list/thing-list.component';
import { ThingEditorComponent } from './thing-editor/thing-editor.component';
import { Routes, RouterModule } from '@angular/router';
import { ClrButtonGroupModule, ClrButtonModule, ClrDatagridModule, ClrFormsModule, ClrIconModule, ClrTabsModule, ClrTextareaModule } from '@clr/angular';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {path:'', component: ThingListComponent},
  {path:':thingId', component: ThingEditorComponent},
  {path: ':thingId/sensors', loadChildren: () => import('../sensor/sensor.module').then(m => m.SensorModule)}
];


@NgModule({
  declarations: [ThingListComponent, ThingEditorComponent],
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
    RouterModule.forChild(routes)
  ]
})
export class ThingModule { }
