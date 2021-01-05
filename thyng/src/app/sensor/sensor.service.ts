import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Sensor } from './sensor';

@Injectable({
  providedIn: 'root'
})
export class SensorService {

  baseUrl: string = 'http://localhost:8080/sensors';

  constructor(private http: HttpClient) { }

  findAll(): Observable<Sensor[]>{
    return this.http.get<Sensor[]>(this.baseUrl);
  }

  findByThingId(thingId: number): Observable<Sensor[]>{
    return this.http.get<Sensor[]>(`${this.baseUrl}?thingId=${thingId}`);
  }

  findById(id: number, thingId: number, tempalteSensorId?: number): Observable<Sensor> {
    return 0 === id? (tempalteSensorId ? this._copy(tempalteSensorId, thingId) : 
      this._default(thingId)) : this.http.get<Sensor>(`${this.baseUrl}/${id}`);
  }

  private _default(thingId: number): Observable<Sensor> {
    return of({
      id: undefined,
      name: '',
      thingId: thingId,
      unit: ''
    });
  }

  private _copy(tempalteSensorId: number, thingId: number): Observable<Sensor> {
    return this.http.get<Sensor>(`${this.baseUrl}/${tempalteSensorId}`).pipe(
      map(sensor => {
        sensor.id = undefined;
        sensor.thingId = thingId;
        return sensor;
      })
    );
  } 

  save(sensor: Sensor): Observable<Sensor>{
    return this.http.post<Sensor>(this.baseUrl, sensor);
  }

  delete(id: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

}
