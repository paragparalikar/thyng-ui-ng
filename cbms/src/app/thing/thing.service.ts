import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Thing } from './thing';

@Injectable({
  providedIn: 'root'
})
export class ThingService {

  baseUrl = 'http://localhost:8080/things';

  constructor(private http: HttpClient) { }

  buildDefault(): Thing {
    return {
      id: undefined,
      name: ''
    };
  }

  findAll(): Observable<Thing[]> {
    return this.http.get<Thing[]>(this.baseUrl);
  }

  save(thing: Thing): Observable<Thing> {
    return this.http.post<Thing>(this.baseUrl, thing);
  }

  delete(id: string): Observable<Thing> {
    return this.http.delete<Thing>(`${this.baseUrl}/${id}`);
  }

}
