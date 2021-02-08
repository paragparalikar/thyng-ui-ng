import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Language } from '../shared/language.enum';
import { Page, Pagination } from '../shared/page';
import { ThingGroup } from './thing-group';

@Injectable({
  providedIn: 'root'
})
export class ThingGroupService {
  
baseUrl: string = 'http://localhost:4567/thing-groups';

constructor(private http: HttpClient) { }

findAll(): Observable<ThingGroup[]>{
  return this.http.get<Pagination<ThingGroup>>(this.baseUrl).pipe(
    map(page => page.items)
  );
}

findPage(page: Pagination<ThingGroup>): Observable<Pagination<ThingGroup>> {
  return this.http.post<Pagination<ThingGroup>>(`${this.baseUrl}/query`, page);
}

findById(id: string): Observable<ThingGroup>{
  return '0' === id ? of(this.buildDefault()) : this.http.get<ThingGroup>(`${this.baseUrl}/${id}`);
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

buildDefault(): ThingGroup {
  return {
    id: undefined,
    name: '',
    language: Language.SQL
  };
}

save(trigger: ThingGroup): Observable<ThingGroup>{
  return this.http.post<ThingGroup>(this.baseUrl, trigger);
}

delete(id: string): Observable<any>{
  return this.http.delete(`${this.baseUrl}/${id}`);
} }
