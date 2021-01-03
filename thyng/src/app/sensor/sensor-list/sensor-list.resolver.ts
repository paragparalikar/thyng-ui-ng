import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Sensor } from '../sensor';
import { SensorService } from '../sensor.service';

@Injectable({
  providedIn: 'root'
})
export class SensorListResolver implements Resolve<Sensor[]> {

  constructor(private sensorSerivce: SensorService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Sensor[]> {
    const thingId = route.paramMap.get('thingId')!;
    return this.sensorSerivce.findByThingId(thingId);
  }
}
