import { Component, Input } from '@angular/core';
import { ClrDatagridSortOrder, ClrDatagridStateInterface } from '@clr/angular';
import { Template } from 'src/app/template/template';
import { TemplateService } from 'src/app/template/template.service';
import { ThingGroup } from '../../thing-group';

@Component({
  selector: 'app-thing-group-templates',
  templateUrl: './thing-group-templates.component.html',
  styles: [
  ]
})
export class ThingGroupTemplatesComponent {

  templates: Template[] = [];
  @Input() thingGroup!: ThingGroup;
  @Input() readOnly!: boolean;
  sortType = ClrDatagridSortOrder.ASC;
  loading: boolean = true;
  totalItems: number = 0;
  
  constructor(private templateService: TemplateService) { }

  refresh(state: ClrDatagridStateInterface) {
    this.loading = true;
    this.templateService.findAll().subscribe(
      templates => this.templates = templates,
      () => this. loading = false
    );
  }

}
