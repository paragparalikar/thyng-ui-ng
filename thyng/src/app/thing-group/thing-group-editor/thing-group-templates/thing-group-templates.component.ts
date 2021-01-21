import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { ClrDatagridSortOrder, ClrDatagridStateInterface } from '@clr/angular';
import { Template } from 'src/app/template/template';
import { TemplateService } from 'src/app/template/template.service';
import { ThingGroup } from '../../thing-group';

@Component({
  selector: 'app-thing-group-templates',
  templateUrl: './thing-group-templates.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ThingGroupTemplatesComponent {

  templates: Template[] = [];
  selection: Template[] = [];
  @Input() thingGroup!: ThingGroup;
  @Input() readOnly!: boolean;
  sortType = ClrDatagridSortOrder.ASC;
  loading: boolean = true;
  
  constructor(private templateService: TemplateService) { }

  refresh(state: ClrDatagridStateInterface) {
    this.loading = true;
    this.templateService.findAll().subscribe(
      templates => {
        this.templates = templates;
        this.selection = templates
          .filter(template => this.thingGroup.templateIds?.includes(template.id!));
      },
      error => console.log(error),
      () => this.loading = false
    );
  }

  selectionChanged(templates: Template[]) {
    this.selection = templates;
    this.thingGroup.templateIds = templates.map(template => template.id!);
  }

}
