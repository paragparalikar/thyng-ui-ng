import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Channel } from './channel';

@Injectable({
  providedIn: 'root'
})
export class ChannelService {

  baseUrl = 'http://localhost:8080/channel-configurations';

  constructor(private http: HttpClient) { }

  findAll(): Observable<Channel[]> {
    return this.http.get<Channel[]>(this.baseUrl); 
  }

  save(channel: Channel): Observable<Channel> {
    return this.http.patch<Channel>(this.baseUrl, channel);
  }

  saveAll(channels: Channel[]): Observable<Channel[]> {
    return this.http.post<Channel[]>(this.baseUrl, channels);
  }

}
