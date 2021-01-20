import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { AttributesTransformer } from 'src/app/shared/transforms/attributes-transformer';
import { Template } from 'src/app/template/template';
import { TemplateService } from 'src/app/template/template.service';
import { Thing } from '../../thing';
import { ThingStatus } from '../../thing-status.enum';
import { ThingService } from '../../thing.service';

@Component({
  selector: 'app-thing-details',
  templateUrl: './thing-details.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ThingDetailsComponent implements OnInit {

  @Input() thing: Thing;
  templates: Template[] = [];
  selectedTemplate?: Template;
  ThingStatus = ThingStatus;
  readOnly: boolean = false;

  constructor(private thingService: ThingService,
              private templateService: TemplateService) { 
      this.thing = thingService.buildDefault();
  }

  ngOnInit(): void {
    this.templateService.findAll().subscribe(templates => {
      this.templates = templates;
      templates.forEach(template => {
        if(template.id === this.thing.templateId){
          this.selectedTemplate = template;
        }
      });
    });
  }

  onTemplateSelected(templateId: string){
    this.thing.templateId = templateId;
    this.templateService.findById(templateId).subscribe(
      template => this.thing.attributes = template.attributes
    );
  }

}
