import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sensor } from './sensor';

@Injectable({
  providedIn: 'root'
})
export class SensorService {

  baseUrl = 'http://localhost:8080/sensors';

  constructor(private http: HttpClient) { }

  buildDefault(): Sensor {
    return {
      id: undefined,
      name: '',
      unit: '',
      min: 0,
      max: 0
    };
  }

  findAll(): Observable<Sensor[]> {
    return this.http.get<Sensor[]>(this.baseUrl);
  }

  save(sensor: Sensor): Observable<Sensor> {
    return this.http.post<Sensor>(this.baseUrl, sensor);
  }

  delete(id: string): Observable<Sensor> {
    return this.http.delete<Sensor>(`${this.baseUrl}/${id}`);
  }

}
