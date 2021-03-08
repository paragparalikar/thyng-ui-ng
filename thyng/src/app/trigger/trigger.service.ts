import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { EventType } from '../shared/event-type.enum';
import { Language } from '../shared/language.enum';
import { Pagination } from '../shared/page';
import { Trigger } from './trigger';

@Injectable({
  providedIn: 'root'
})
export class TriggerService {

  baseUrl: string = 'http://localhost:4567/triggers';

  constructor(private http: HttpClient) { }

  findPage(page: Pagination<Trigger>): Observable<Pagination<Trigger>> {
    return this.http.post<Pagination<Trigger>>(`${this.baseUrl}/query`, page);
  }

  findById(id: string, templateTriggerId?: string): Observable<Trigger>{
    return '0' === id ? (templateTriggerId ? this.copy(templateTriggerId) : of(this.buildDefault())) 
              : this.http.get<Trigger>(`${this.baseUrl}/${id}`);
  }

  existsByName(id: string, name: string): Observable<boolean>{
    return this.http.head(`${this.baseUrl}/${id}?name=${name}`,{observe: 'response'}).pipe(
      map(response => {
        return 302 === response.status;
      }),
      catchError(error => {
        return of(404 === error.status ? false : true);
      })
    );
  }

  buildDefault(): Trigger {
    return {
      id: undefined,
      name: '',
      enabled: true,
      script: '',
      actionIds: [],
      thingGroupIds: [],
      eventType: EventType.TELEMETRY,
      language: Language.SQL,
      includeEvents: false,
      includeAggregations: true,
      window: undefined
    };
  }

  copy(templateTriggerId: string): Observable<Trigger> {
    return this.http.get<Trigger>(`${this.baseUrl}/${templateTriggerId}`).pipe(
      map(trigger => {
        trigger.id = undefined;
        return trigger;
      })
    );
  }

  save(trigger: Trigger): Observable<Trigger>{
    return this.http.post<Trigger>(this.baseUrl, trigger);
  }

  delete(id: string): Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`);
  } 

}
