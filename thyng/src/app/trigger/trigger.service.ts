import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Trigger } from './trigger';

@Injectable({
  providedIn: 'root'
})
export class TriggerService {

  baseUrl: string = 'http://localhost:8080/triggers';

  constructor(private http: HttpClient) { }

  findAll(): Observable<Trigger[]>{
    return this.http.get<Trigger[]>(this.baseUrl);
  }

  findById(id: number): Observable<Trigger>{
    return this.http.get<Trigger>(`${this.baseUrl}/${id}`);
  }

  save(trigger: Trigger): Observable<Trigger>{
    return this.http.post<Trigger>(this.baseUrl, trigger);
  }

  delete(id: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`);
  } 

}
