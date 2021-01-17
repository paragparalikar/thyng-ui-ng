import { Component, Input, OnInit } from '@angular/core';
import { Template } from '../../template';
import { TemplateService } from '../../template.service';

@Component({
  selector: 'app-template-details',
  templateUrl: './template-details.component.html',
  styles: [
  ]
})
export class TemplateDetailsComponent {

  @Input() template: Template;
  readOnly: boolean = false;

  constructor(private templateService: TemplateService) {
    this.template = templateService.buildDefault();
  }

}
