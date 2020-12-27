import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ThingService } from '../thing.service';

@Injectable({
  providedIn: 'root'
})
export class ThingListResolver implements Resolve<boolean> {

  constructor(private thingService: ThingService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return of(true);
  }
}
