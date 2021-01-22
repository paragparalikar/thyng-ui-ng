import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Thing } from './thing';
import { ThingStatus } from './thing-status.enum';

@Injectable({
  providedIn: 'root'
})
export class ThingService {

  baseUrl: string = 'http://localhost:4567/things';

  constructor(private http: HttpClient) { }

  findAll(): Observable<Thing[]>{
    return this.http.get<Thing[]>(this.baseUrl);
  }

  findById(id: string): Observable<Thing>{
    return '0' === id ? of(this.buildDefault()) : this.http.get<Thing>(`${this.baseUrl}/${id}`);
  }

  buildDefault(): Thing{
    return {
      id: undefined,
      name: '',
      templateId: '',
      status: ThingStatus.OFFLINE,
      inactivityPeriod: 60,
      attributes: []
    };
  }

  save(thing: Thing): Observable<Thing>{
    return this.http.post<Thing>(this.baseUrl, thing);
  }

  delete(id: string): Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

}
