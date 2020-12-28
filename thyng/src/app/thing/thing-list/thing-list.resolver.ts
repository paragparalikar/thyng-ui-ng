import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Thing } from '../thing';
import { ThingService } from '../thing.service';

@Injectable({
  providedIn: 'root'
})
export class ThingListResolver implements Resolve<Thing[]> {

  constructor(private thingService: ThingService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Thing[]> {
    return this.thingService.findAll();
  }
}
