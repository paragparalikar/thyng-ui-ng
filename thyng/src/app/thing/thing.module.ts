import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ThingListComponent } from './thing-list/thing-list.component';
import { ThingEditorComponent } from './thing-editor/thing-editor.component';
import { Routes, RouterModule } from '@angular/router';
import { ClrButtonGroupModule, ClrButtonModule, ClrDatagridModule, ClrFormsModule, ClrIconModule, ClrTabsModule } from '@clr/angular';
import { SharedModule } from '../shared/shared.module';
import { ThingListResolver } from './thing-list/thing-list.resolver';
import { ClipboardModule } from 'ngx-clipboard';
import { FormsModule } from '@angular/forms';
import { ThingResolver } from './thing-editor/thing.resolver';

const routes: Routes = [
  {path:'', component: ThingListComponent, resolve: {things: ThingListResolver}},
  {path:':id', component: ThingEditorComponent, resolve:{thing: ThingResolver}},
  {path: ':id/sensors', loadChildren: () => import('../sensor/sensor.module').then(m => m.SensorModule)}
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
    ClipboardModule,
    ClrButtonModule,
    ClrButtonGroupModule,
    RouterModule.forChild(routes)
  ]
})
export class ThingModule { }
