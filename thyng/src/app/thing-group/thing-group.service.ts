import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ThingGroup } from './thing-group';

@Injectable({
  providedIn: 'root'
})
export class ThingGroupService {
  
baseUrl: string = 'http://localhost:4567/thing-groups';

constructor(private http: HttpClient) { }

findAll(): Observable<ThingGroup[]>{
  return this.http.get<ThingGroup[]>(this.baseUrl);
}

findById(id: string): Observable<ThingGroup>{
  return '0' === id ? of(this.buildDefault()) : this.http.get<ThingGroup>(`${this.baseUrl}/${id}`);
}

buildDefault(): ThingGroup {
  return {
    id: undefined,
    name: '',
    type: 'SCRIPT',
    language: 'SQL',
    thingIds: [],
    templateIds: []
  };
}

save(trigger: ThingGroup): Observable<ThingGroup>{
  return this.http.post<ThingGroup>(this.baseUrl, trigger);
}

delete(id: string): Observable<any>{
  return this.http.delete(`${this.baseUrl}/${id}`);
} }
