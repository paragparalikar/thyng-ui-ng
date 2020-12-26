import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tenant } from './tenant';

@Injectable({
  providedIn: 'root'
})
export class TenantService {

  baseUrl: string = 'http://localhost:8080/tenants';

  constructor(private http: HttpClient) { }

  findAll(): Observable<Tenant[]>{
    return this.http.get<Tenant[]>(this.baseUrl);
  }

  findById(id: string): Observable<Tenant>{
    return this.http.get<Tenant>(this.baseUrl + "/" + id);
  }

}
