import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Language } from '../shared/language.enum';
import { Pagination } from '../shared/page';
import { UserGroup } from './user-group';

@Injectable({
  providedIn: 'root'
})
export class UserGroupService {

  baseUrl = 'http://localhost:4567/user-groups';

  constructor(private http: HttpClient) { }

  buildDefault(): UserGroup {
    return {
      id: undefined,
      name: '',
      language: Language.SQL,
      script: ''
    };
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

  findAll(): Observable<UserGroup[]> {
    return this.http.get<Pagination<UserGroup>>(this.baseUrl).pipe(
      map(page => page.items)
    );
  }

  findPage(page: Pagination<UserGroup>): Observable<Pagination<UserGroup>> {
    return this.http.post<Pagination<UserGroup>>(`${this.baseUrl}/query`, page);
  }

  findById(id: string): Observable<UserGroup> {
    return "0" === id ? of(this.buildDefault()) : this.http.get<UserGroup>(`${this.baseUrl}/${id}`);
  }

  save(userGroup: UserGroup): Observable<UserGroup> {
    return this.http.post<UserGroup>(this.baseUrl, userGroup);
  }

  delete(id: string): Observable<UserGroup> {
    return this.http.delete<UserGroup>(`${this.baseUrl}/${id}`);
  }
}
