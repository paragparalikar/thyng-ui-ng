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

  thing: Thing;
  message?: Message;
  ThingStatus = ThingStatus;
  readOnly: boolean = false;
  header: string = 'Create New Thing'

  constructor(private route: ActivatedRoute,
              private thingService: ThingService) { 
    this.thing = thingService.buildDefault();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      map => {
        this.message = undefined;
        const thingId = map.get('thingId')!;
        this.thingService.findById(thingId).subscribe(
          thing => {
            this.thing = thing;
            this.readOnly = false; // check if user has access to edit things
            this.header = this.thing?.id ? `Edit ${this.thing.name}` : 'Create New Thing'
          }
        );
      }
    );
  }

  save(): void {
    if(this.thing){
      this.thingService.save(this.thing).subscribe(
        result => {
          this.thing = result;
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
