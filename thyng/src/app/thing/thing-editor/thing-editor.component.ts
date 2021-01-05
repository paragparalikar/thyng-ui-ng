import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Message } from 'src/app/shared/message';
import { AttributesTransformer } from 'src/app/shared/transforms/attributes-transformer';
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
  attributes?: string;
  message?: Message;
  ThingStatus = ThingStatus;
  readOnly: boolean = false;
  header: string = 'Create New Thing'

  constructor(private route: ActivatedRoute,
              private thingService: ThingService,
              private attributeTransformer: AttributesTransformer) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      map => {
        this.message = undefined;
        const thingId = +map.get('thingId')!;
        const templateThingId = +this.route.snapshot.queryParamMap.get('templateThingId')!;
        this.thingService.findById(thingId, templateThingId).subscribe(
          thing => {
            this.thing = thing;
            this.readOnly = false; // check if user has access to edit things
            this.header = this.thing?.id ? `Edit ${this.thing.name}` : 'Create New Thing'
            this.attributes = this.attributeTransformer.from(this.thing?.attributes);
          }
        );
      }
    );
  }

  save(): void {
    if(this.thing){
      this.thing.attributes = this.attributeTransformer.to(this.attributes);
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
