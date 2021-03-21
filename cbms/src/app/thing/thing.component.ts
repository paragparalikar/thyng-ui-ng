import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Thing } from './thing';
import { ThingService } from './thing.service';

@Component({
  selector: 'app-thing',
  templateUrl: './thing.component.html',
  styleUrls: ['./thing.component.css']
})
export class ThingComponent implements OnInit {

  things: Thing[] = [];
  alert: Boolean = false;
  openModal: Boolean = false;
  thing:Thing;
  alertDelete: boolean=false;
  
 

  constructor(private thingService: ThingService) { }

  ngOnInit(): void {
    this.thingService.findAll().subscribe(
      things => this.things = things
    );
    
  }

  add() {
    this.things.push(this.thingService.buildDefault());
  }

  save(thing: Thing) {
    this.thingService.save(thing).subscribe(
      result => this.ngOnInit()
    );
    this.alert = true;
    setTimeout(() => this.alert = false, 3500);

  }

  findDuplicate(thing: string):Boolean{
    
    let test = this.things.filter(data=> data.name.toUpperCase()==thing.toUpperCase() && name!=null)
    if (test.length > 1) {
      return true;
    } else {
      return false
    }

  }

  alphanumaricOnly(event){
    var inp = String.fromCharCode(event.keyCode);

    if (/[a-zA-Z0-9 ]/.test(inp)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }

  closeAlert() {

    this.alert = false;
  }

  closeAlertDelete(){
    this.alertDelete = false;
  }

  delete(thing: Thing) {
    
    this.openModal = true
    this.thing=thing;
    
  }

  deleteThing() {
    if (this.thing.id) {
      this.thingService.delete(this.thing.id).subscribe(
        result => this.ngOnInit()
      );
    } else {
      this.things.splice(this.things.indexOf(this.thing), 1);
    }
    this.openModal = false;
    this.alertDelete=true;
    setTimeout(()=>this.alertDelete=false, 3500);
  }

  doNothing() {
    this.openModal = false;
  }
}
