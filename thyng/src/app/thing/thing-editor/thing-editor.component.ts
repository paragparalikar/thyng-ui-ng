import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Message } from 'src/app/shared/message';
import { Thing } from '../thing';
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
  }

  save(): void {

  }

}
