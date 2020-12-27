import { Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { ConfirmDialogOptions } from './confirm-dialog-options';

@Injectable({
  providedIn: 'root'
})
export class ConfirmDialogService {

  resultSubject = new Subject<boolean>();
  optionsSubject = new Subject<ConfirmDialogOptions>();

  hide(): void {
    this.optionsSubject.next();
  }

  options(): Observable<ConfirmDialogOptions>{
    return this.optionsSubject.asObservable();
  }

  cancel(): void{
    this.hide();
    this.resultSubject.next(false);
  }

  action(): void {
    this.hide();
    this.resultSubject.next(true);
  }

  show(options: ConfirmDialogOptions): Observable<boolean> {
    this.optionsSubject.next(options);
    return this.resultSubject.asObservable();
  }

}
