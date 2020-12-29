import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Message } from 'src/app/shared/message';
import { Thing } from '../thing';
import { ThingStatus } from '../thing-status.enum';
import { ThingService } from '../thing.service';

@Component({
  selector: 'app-thing-editor',
  templateUrl: './thing-editor.component.html',
  styles: [
  ]
})
export class ThingEditorComponent implements OnInit {

  thing?: Thing;
  message?: Message;
  ThingStatus = ThingStatus;
  readOnly: boolean = true;
  header: string = 'Create New Thing';

  constructor(private route: ActivatedRoute,
              private thingService: ThingService) { }

  ngOnInit(): void {
    this.route.data.subscribe(
      data => {
        this.message = undefined;
        this.thing = data.thing;
        this.header = this.thing?.id ? `Edit ${this.thing.name}` : 'Create New Thing'
      }
    );
    this.route.queryParamMap.subscribe(
      map => {
        this.readOnly = 'view'===map.get('action');
      }
    );
  }

  save(): void {
    if(this.thing){
      this.thingService.save(this.thing).subscribe(
        result => {
          this.message = {
            iconShape: 'check',
            styleClasses: 'alert-success',
            text: `Thing ${this.thing?.name} has been saved successfully`
          };
        }
      );
    }
  }

}
