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

  baseUrl: string = 'http://localhost:8080/things';

  constructor(private http: HttpClient) { }

  findAll(): Observable<Thing[]>{
    return this.http.get<Thing[]>(this.baseUrl);
  }

  findById(id: number, templateThingId?: number): Observable<Thing>{
    return 0 === id ? (templateThingId? this._copy(templateThingId) : this._default()) 
            : this.http.get<Thing>(`${this.baseUrl}/${id}`);
  }

  private _default(): Observable<Thing>{
    return of({
      id: undefined,
      name: '',
      status: ThingStatus.OFFLINE,
      inactivityPeriod: 60,
      attributes: new Map<string, string>()
    });
  }

  private _copy(templateThingId: number): Observable<Thing> {
    return this.http.get<Thing>(`${this.baseUrl}/${templateThingId}`).pipe(
      map(thing => {
        thing.id = undefined;
        return thing;
      })
    );
  }

  save(thing: Thing): Observable<Thing>{
    return this.http.post<Thing>(this.baseUrl, thing);
  }

  delete(id: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

}
