import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sensor } from '../sensor/sensor';
import { Thing } from '../thing/thing';
import { DashboardComponent } from './dashboard.component';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  baseUrl = 'http://localhost:8080/metrics';
  constructor(private http: HttpClient) { }

  generate(SeriesRequestDto:SeriesRequestDto):Observable<SeriesResponseDto>{
    return this.http.post<SeriesResponseDto>(this.baseUrl, SeriesRequestDto)
  }

  enable(value: boolean): Observable<boolean> {
    return this.http.get<boolean>(`${this.baseUrl}?enable=${value}`);
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