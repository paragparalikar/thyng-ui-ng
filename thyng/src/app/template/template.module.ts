import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateListComponent } from './template-list/template-list.component';
import { TemplateEditorComponent } from './template-editor/template-editor.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ClrDatagridModule, ClrFormsModule, ClrIconModule, ClrButtonModule, ClrButtonGroupModule, ClrTextareaModule, ClrTabsModule } from '@clr/angular';
import { SharedModule } from '../shared/shared.module';
import { TemplateAttributesComponent } from './template-editor/template-attributes/template-attributes.component';
import { TemplateDetailsComponent } from './template-editor/template-details/template-details.component';
import { SensorsComponent } from './template-editor/sensors/sensors.component';
import { ActuatorsComponent } from './template-editor/actuators/actuators.component';

const routes: Routes = [
  {path:'', component: TemplateListComponent},
  {path:':templateId', component: TemplateEditorComponent}
];

@NgModule({
  declarations: [TemplateListComponent, TemplateEditorComponent, TemplateAttributesComponent, TemplateDetailsComponent, SensorsComponent, ActuatorsComponent],
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
export class TemplateModule { }
