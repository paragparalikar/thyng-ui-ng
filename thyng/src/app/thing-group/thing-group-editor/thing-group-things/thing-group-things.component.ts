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
  selection: Thing[] = [];
  loading: boolean = true;

  constructor(private thingService: ThingService) { }

  refresh(state: ClrDatagridStateInterface) {
    this.loading = true;
    this.thingService.findAll().subscribe(
      things => {
        this.things = things;
        this.selection = things.filter(thing => this.thingGroup.thingIds?.includes(thing.id!));
      },
      error => console.log(error),
      () => this.loading = false
    );
  }

  selectionChanged(things: Thing[]) {
    this.selection = things;
    this.thingGroup.thingIds = things.map(thing => thing.id!);
  }

}
