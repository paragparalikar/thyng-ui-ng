import { Component, OnInit } from '@angular/core';
import { Thing } from './thing';
import { ThingService } from './thing.service';

@Component({
  selector: 'app-thing',
  templateUrl: './thing.component.html',
  styleUrls: ['./thing.component.css']
})
export class ThingComponent implements OnInit {

  things: Thing[] = [];

  constructor(private thingService: ThingService) { }

  ngOnInit(): void {
    this.thingService.findAll().subscribe(
      things => this.things = things
    );
  }

  add() {
    this.things.push(this.thingService.buildDefault());
  }

  save(thing: Thing){
    this.thingService.save(thing).subscribe(
      result => this.ngOnInit()
    );
  }

  delete(thing: Thing) {
    if(thing.id){
      this.thingService.delete(thing.id).subscribe(
        result => this.ngOnInit()
      );
    } else {
      this.things.splice(this.things.indexOf(thing), 1);
    }
  }

}
