import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Pagination } from '../shared/page';
import { Action } from './action';
import { ActionType } from './action-type.enum';

@Injectable({
  providedIn: 'root'
})
export class ActionService {

  private baseUrl = 'http://localhost:4567/actions';

  constructor(private http: HttpClient) { }

  buildDefault(): Action {
    return {
      id: undefined,
      name: '',
      enabled: true,
      type: ActionType.ALERT,
      throttlingPeriod: 0,
      userGroupIds: [],
      subject: '',
      content: ''
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

  findAll(): Observable<Action[]> {
    return this.http.get<Pagination<Action>>(this.baseUrl).pipe(
      map(page => page.items)
    );
  }

  findPage(page: Pagination<Action>, actionType: ActionType): Observable<Pagination<Action>> {
    return this.http.post<Pagination<Action>>(`${this.baseUrl}/query`, page);
  }

  findById(id: string): Observable<Action>{
    return "0" === id ? of(this.buildDefault()) : this.http.get<Action>(`${this.baseUrl}/${id}`);
  }

  save(action: Action): Observable<Action> {
    return this.http.post<Action>(this.baseUrl, action);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

}
