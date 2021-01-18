import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { Template } from '../../template';
import { TemplateService } from '../../template.service';

@Component({
  selector: 'app-template-details',
  templateUrl: './template-details.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class TemplateDetailsComponent {

  @Input() template: Template;
  readOnly: boolean = false;

  constructor(private templateService: TemplateService) {
    this.template = templateService.buildDefault();
  }

}
