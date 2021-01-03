import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
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

  findByThingId(thingId: string): Observable<Sensor[]>{
    return this.http.get<Sensor[]>(`${this.baseUrl}?thingId=${thingId}`);
  }

  findById(id: string): Observable<Sensor>{
    return this.http.get<Sensor>(`${this.baseUrl}/${id}`);
  }

  save(sensor: Sensor): Observable<Sensor>{
    return this.http.post<Sensor>(this.baseUrl, sensor);
  }

  delete(id: string): Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

}
