import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Message } from '../message';

@Injectable({
  providedIn: 'root'
})
export class GlobalMessageService {

  private subject = new Subject<Message>();
  
  setMessage(message: Message) {
      this.subject.next(message);
  }
  
  clearMessage() {
      this.subject.next();
  }
  
  getMessage(): Observable<Message> {
      return this.subject.asObservable();
  }
}
