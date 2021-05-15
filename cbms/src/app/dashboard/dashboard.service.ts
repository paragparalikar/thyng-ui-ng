import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sensor } from '../sensor/sensor';
import { Thing } from '../thing/thing';
import { DashboardComponent } from './dashboard.component';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Http, ResponseContentType} from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  baseUrl = 'http://localhost:8080/metrics';
  constructor(private http: HttpClient) { }

  generate(SeriesRequestDto:SeriesRequestDto):Observable<SeriesResponseDto>{
    return this.http.post<SeriesResponseDto>(this.baseUrl, SeriesRequestDto)
  }

  /*enable(value: boolean): Observable<boolean> {
    return this.http.get<boolean>(`${this.baseUrl}?enable=${value}`);
  }*/



  enable(dataFrequency:number): Observable<number>{
     return this.http.put<number>(`${this.baseUrl}?delay=${dataFrequency}`, dataFrequency);
  }

  
  backup(): any{		
		return this.http.get(this.baseUrl, {responseType: 'blob'});
   }

  purge(): any{
    return this.http.delete(this.baseUrl);
  }

  delay(): Observable<number>{
    return this.http.get<number>(`${this.baseUrl}/delay`);

  }
}

export interface SeriesResponseDto{
  plots: PlotDto[];
  values: number[];
  timestamps: Date[];
}

export interface PlotDto{
  count:number;
  average:number;
  min:number;
  max:number;
  from:Date;
  to: Date;
}

export interface SeriesRequestDto {
  thingId?: string;
  sensorId?: string;
  from: Date;
  to: Date;
}