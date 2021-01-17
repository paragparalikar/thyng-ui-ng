import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClrDatagridSortOrder } from '@clr/angular';
import { ConfirmDialogService } from 'src/app/shared/confirm-dialog/confirm-dialog.service';
import { Message } from 'src/app/shared/message';
import { Template } from '../template';
import { TemplateService } from '../template.service';

@Component({
  selector: 'app-template-list',
  templateUrl: './template-list.component.html',
  styles: [
  ]
})
export class TemplateListComponent implements OnInit {

  templates: Template[] = [];
  message?: Message;
  sortType = ClrDatagridSortOrder.ASC;

  constructor(private route: ActivatedRoute,
    private templateService: TemplateService,
    private confirmDialogService: ConfirmDialogService) { }

    ngOnInit(): void {
      this.message = undefined;
      this.templateService.findAll().subscribe(
        templates => {
          this.templates = templates;
        }
      );
    }
  
    delete(template: Template): void {
      this.confirmDialogService.show({
        buttonClasses: 'btn-danger',
        buttonText: 'Delete',
        iconClasses: 'is-danger',
        iconShape: 'exclamation-triangle',
        text: `Are you sure you want to delete template ${template.name}?`
      }).subscribe(
        value => {
          if(value) this._delete(template);
        }
      );
    }
  
    private _delete(template: Template): void {
      this.templateService.delete(template.id!).subscribe(
        data => {
          this.templates.splice(this.templates.indexOf(template), 1);
          this.message = {
            iconShape: 'check',
            styleClasses: 'alert-success',
            text: `Template ${template.name} has been deleted successfully`
          };
      }
      );
    }
}
