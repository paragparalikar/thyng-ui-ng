import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Page, Pagination } from '../shared/page';
import { Thing } from './thing';

@Injectable({
  providedIn: 'root'
})
export class ThingService {

  baseUrl: string = 'http://localhost:4567/things';

  constructor(private http: HttpClient) { }

  findAll(): Observable<Thing[]>{
    return this.http.get<Pagination<Thing>>(this.baseUrl).pipe(
      map(page => page?.items ? page.items : [])
    );
  }

  findPage(page: Pagination<Thing>): Observable<Pagination<Thing>>{
    return this.http.post<Pagination<Thing>>(`${this.baseUrl}/query`, page);
  }

  findById(id: string): Observable<Thing>{
    return '0' === id ? of(this.buildDefault()) : this.http.get<Thing>(`${this.baseUrl}/${id}`);
  }

  buildDefault(): Thing{
    return {
      id: undefined,
      name: '',
      inactivityPeriod: 60000,
      attributes: [],
      sensors: [],
      actuators: []
    };
  }

  save(thing: Thing): Observable<Thing>{
    return this.http.post<Thing>(this.baseUrl, thing);
  }

  delete(id: string): Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

}
