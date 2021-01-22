import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Message } from 'src/app/shared/message';
import { Template } from '../template';
import { TemplateService } from '../template.service';

@Component({
  selector: 'app-template-editor',
  templateUrl: './template-editor.component.html',
  styles: [
  ]
})
export class TemplateEditorComponent implements OnInit {

  template: Template;
  message?: Message;
  readOnly: boolean = false;
  header: string = 'Create New Thing'

  constructor(private route: ActivatedRoute,
              private templateService: TemplateService) { 
    this.template = templateService.buildDefault();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      map => {
        this.message = undefined;
        const templateId = map.get('templateId')!;
        this.templateService.findById(templateId).subscribe(
          template => {
            this.template = template;
            this.readOnly = false; // check if user has access to edit things
            this.header = this.template?.id ? `Edit ${this.template.name}` : 'Create New Template'
          }
        );
      }
    );
  }

  save(): void {
    if(this.template){
      this.templateService.save(this.template).subscribe(
        result => {
          this.template = result;
          this.message = {
            iconShape: 'check',
            styleClasses: 'alert-success',
            text: `Template ${this.template?.name} has been saved successfully`
          };
        }
      );
    }
  }

}
