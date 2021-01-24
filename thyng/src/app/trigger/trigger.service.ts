import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { EventType } from '../shared/event-type.enum';
import { Language } from '../shared/language.enum';
import { Trigger } from './trigger';

@Injectable({
  providedIn: 'root'
})
export class TriggerService {

  baseUrl: string = 'http://localhost:4567/triggers';

  constructor(private http: HttpClient) { }

  findAll(): Observable<Trigger[]>{
    return this.http.get<Trigger[]>(this.baseUrl);
  }

  findById(id: string, templateTriggerId?: string): Observable<Trigger>{
    return '0' === id ? (templateTriggerId ? this.copy(templateTriggerId) : of(this.buildDefault())) 
              : this.http.get<Trigger>(`${this.baseUrl}/${id}`);
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
