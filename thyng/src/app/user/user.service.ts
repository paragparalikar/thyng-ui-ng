import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Pagination } from '../shared/page';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = 'http://localhost:4567/users';

  constructor(private http: HttpClient) { }

  buildDefault(): User {
    return {
      id: undefined,
      name: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      attributes: []
    };
  }

  findAll(): Observable<User[]> {
    return this.http.get<Pagination<User>>(this.baseUrl).pipe(
      map(page => page.items)
    );
  }

  findPage(page: Pagination<User>): Observable<Pagination<User>> {
    return this.http.post<Pagination<User>>(`${this.baseUrl}/query`, page);
  }

  findById(id: string): Observable<User> {
    return "0" === id ? of(this.buildDefault()) : this.http.get<User>(`${this.baseUrl}/${id}`);
  }

  save(user: User): Observable<User> {
    return this.http.post<User>(this.baseUrl, user);
  }

  delete(id: string): Observable<User> {
    return this.http.delete<User>(`${this.baseUrl}/${id}`);
  }

}
