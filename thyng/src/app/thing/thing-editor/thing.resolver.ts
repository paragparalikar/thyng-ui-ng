import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators'
import { Thing } from '../thing';
import { ThingStatus } from '../thing-status.enum';
import { ThingService } from '../thing.service';

@Injectable({
  providedIn: 'root'
})
export class ThingResolver implements Resolve<Thing> {

  constructor(private thingService: ThingService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Thing> {
    const id: string = route.paramMap.get('thingId')!;
    const templateThingId = route.queryParamMap.get('templateThingId');
    if('0'===id){
      if(templateThingId) {
        return this.thingService.findById(templateThingId).pipe(
          map(thing => {
            thing.id = '';
            return thing;
          })
        );
      } else {
        return of({
          id: '',
          name: '',
          status: ThingStatus.OFFLINE,
          inactivityPeriod: 60,
          attributes: new Map<string, string>()
        });
      }
    } else {
      return this.thingService.findById(id);
    }
  }
}
