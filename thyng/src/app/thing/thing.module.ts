import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ThingService } from './thing.service';
import { ThingListComponent } from './thing-list/thing-list.component';
import { ThingEditorComponent } from './thing-editor/thing-editor.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'', component: ThingListComponent},
  {path:':id', component: ThingEditorComponent}
];


@NgModule({
  declarations: [ThingListComponent, ThingEditorComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ]
})
export class ThingModule { }