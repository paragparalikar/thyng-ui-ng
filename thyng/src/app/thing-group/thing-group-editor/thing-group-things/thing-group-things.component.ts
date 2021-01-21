import { Component, Input } from '@angular/core';
import { ClrDatagridSortOrder, ClrDatagridStateInterface } from '@clr/angular';
import { Thing } from 'src/app/thing/thing';
import { ThingService } from 'src/app/thing/thing.service';
import { ThingGroup } from '../../thing-group';

@Component({
  selector: 'app-thing-group-things',
  templateUrl: './thing-group-things.component.html',
  styles: [
  ]
})
export class ThingGroupThingsComponent {

  @Input() thingGroup!: ThingGroup;
  @Input() readOnly!: boolean;
  sortType = ClrDatagridSortOrder.ASC;
  things: Thing[] = [];
  loading: boolean = true;

  constructor(private thingService: ThingService) { }

  refresh(state: ClrDatagridStateInterface) {
    this.loading = true;
    this.thingService.findAll().subscribe(
      things => this.things = things,
      () => this.loading = false
    );
  }

}
