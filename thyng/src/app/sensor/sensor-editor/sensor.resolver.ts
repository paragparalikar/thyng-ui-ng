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
export class SensorResolver implements Resolve<Sensor> {

  constructor(private sensorService: SensorService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Sensor> {
    const sensorId = route.paramMap.get('sensorId')!;
    if('0' === sensorId) {
      return of({
        id: '',
        name: '',
        thingId: route.paramMap.get('thingId')!,
        unit: ''
      });
    }
    return this.sensorService.findById(sensorId);
  }
}
