import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
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
      actionType: ActionType.MAIL,
      rateLimit: 0,
      userGroupIds: [],
      subject: '',
      content: ''
    };
  }

  findAll(): Observable<Action[]> {
    return this.http.get<Action[]>(this.baseUrl);
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
