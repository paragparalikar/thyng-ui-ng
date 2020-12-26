import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Actuator } from './actuator';

@Injectable({
  providedIn: 'root'
})
export class ActuatorService {

  baseUrl: string = 'http://localhost:8080/actuators';

  constructor(private http: HttpClient) { }

  findAll(): Observable<Actuator[]>{
    return this.http.get<Actuator[]>(this.baseUrl);
  }

  findById(id: string): Observable<Actuator>{
    return this.http.get<Actuator>(`${this.baseUrl}/${id}`);
  }

  save(actuator: Actuator): Observable<Actuator>{
    return this.http.post<Actuator>(this.baseUrl, actuator);
  }

  delete(id: string): void{
    this.http.delete(`${this.baseUrl}/${id}`);
  }
}
