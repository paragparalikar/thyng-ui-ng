import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ReadCsvService {
  csvFileName: string;


  //Data = 'assets/Machine 1_Pressure.csv'

  constructor(private http: HttpClient) { }
  public getData(csvFileName:string) {
    const Data='assets/'+csvFileName+'.csv'
    return this.http.get(Data, { responseType: 'text' });
  }
}
