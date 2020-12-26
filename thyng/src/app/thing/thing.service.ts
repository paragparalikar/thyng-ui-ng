import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Thing } from './thing';

@Injectable({
  providedIn: 'root'
})
export class ThingService {

  baseUrl: string = 'http://localhost:8080/things';

  constructor(private http: HttpClient) { }

  findAll(): Observable<Thing[]>{
    return this.http.get<Thing[]>(this.baseUrl);
  }

  findById(id: string): Observable<Thing>{
    return this.http.get<Thing>(`${this.baseUrl}/${id}`);
  }

  save(thing: Thing): Observable<Thing>{
    return this.http.post<Thing>(this.baseUrl, thing);
  }

  delete(id: string): void{
    this.http.delete(`${this.baseUrl}/${id}`);
  }

}
