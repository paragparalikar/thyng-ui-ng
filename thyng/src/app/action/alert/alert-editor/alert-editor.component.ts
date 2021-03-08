import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Message } from 'src/app/shared/message';
import { Action } from '../../action';
import { ActionType } from '../../action-type.enum';
import { ActionService } from '../../action.service';

@Component({
  selector: 'app-alert-editor',
  templateUrl: './alert-editor.component.html',
  styles: [
  ]
})
export class AlertEditorComponent implements OnInit {

  action: Action;
  message?: Message;
  header: string = 'Create New Alert';
  readOnly: boolean = false;

  constructor(private route: ActivatedRoute,
              private actionService: ActionService) {
    this.action = actionService.buildDefault();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      map => {
        this.message = undefined;
        this.actionService.findById(map.get('actionId')!).subscribe(
          action => {
            this.action = action;
            this.header = action?.id ? `Edit ${action.name}` : 'Create New Alert';
          }
        );
      }
    );
  }

  save(){
    if(this.action){
      this.action.type = ActionType.ALERT;
      console.log(this.action);
      this.actionService.save(this.action).subscribe(
        action => {
          this.action = action;
          this.message = {
            iconShape: 'check',
            styleClasses: 'alert-success',
            text: `${this.action?.name} has been saved successfully`
          };
        }
      );
    }
  }


}
