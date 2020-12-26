import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  findById(id: string): Observable<Sensor>{
    return this.http.get<Sensor>(`${this.baseUrl}/${id}`);
  }

  save(sensor: Sensor): Observable<Sensor>{
    return this.http.post<Sensor>(this.baseUrl, sensor);
  }

  delete(id: string): void{
    this.http.delete(`${this.baseUrl}/${id}`);
  }

}
