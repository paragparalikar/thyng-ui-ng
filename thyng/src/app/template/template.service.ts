import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Template } from './template';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {

  baseUrl: string = 'http://localhost:4567/templates';

  constructor(private http: HttpClient) { }

  findAll(): Observable<Template[]>{
    return this.http.get<Template[]>(this.baseUrl);
  }

  findById(id: string, templateTemplateId?: string): Observable<Template>{
    return '0' === id ? (templateTemplateId? this.copy(templateTemplateId) : of(this.buildDefault())) 
            : this.http.get<Template>(`${this.baseUrl}/${id}`);
  }

  buildDefault(): Template{
    return {
      id: undefined,
      name: '',
      inactivityPeriod: 60,
      attributes: [],
      sensors: [],
      actuators: []
    };
  }

  copy(templateTemplateId: string): Observable<Template> {
    return this.http.get<Template>(`${this.baseUrl}/${templateTemplateId}`).pipe(
      map(template => {
        template.id = undefined;
        return template;
      })
    );
  }

  save(template: Template): Observable<Template>{
    return this.http.post<Template>(this.baseUrl, template);
  }

  delete(id: string): Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

}
