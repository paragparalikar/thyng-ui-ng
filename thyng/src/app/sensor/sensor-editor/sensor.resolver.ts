import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Sensor } from '../sensor';
import { SensorService } from '../sensor.service';

@Injectable({
  providedIn: 'root'
})
export class SensorResolver implements Resolve<Sensor> {

  constructor(private sensorService: SensorService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Sensor> {
    const sensorId = route.paramMap.get('sensorId')!;
    const templateSensorId = route.queryParamMap.get('templateSensorId');
    if('0' === sensorId) {
      if(templateSensorId){
        return this.sensorService.findById(templateSensorId).pipe(
          map(sensor => {
            sensor.id = '';
            return sensor;
          })
        );
      } else {
        return of({
          id: '',
          name: '',
          thingId: route.paramMap.get('thingId')!,
          unit: ''
        });
      }
    } else {
      return this.sensorService.findById(sensorId);
    }
  }
}
