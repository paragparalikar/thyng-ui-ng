import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { GlobalMessageService } from './global-message.service';

@Injectable()
export class GlobalMessageHttpInterceptor implements HttpInterceptor {

    constructor(private globalMessageService: GlobalMessageService){}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMsg = "";
        if (error.error instanceof ErrorEvent) {
          console.log("this is client side error");
          errorMsg = `Error: ${error.error.message}`;
          this.globalMessageService.setMessage({
              iconShape: 'exclamation-triangle',
              styleClasses: 'alert-danger',
              text: 'There has been an error, please contact administrator'
          });
        } else {
          console.log("this is server side error");
          errorMsg = `Error Code: ${error.status},  Message: ${error.message}`;
          let messageText: string | undefined = undefined;
          switch(error.status){
              case 400: messageText = 'There has been an unexpected server error, please contact administrator'; break;
              case 401: messageText = 'Your session has expired, please login again'; break;
              case 402: messageText = 'Your account is suspended due to lack of funds'; break;
              case 403: messageText = 'You are not authorized to access this resource'; break;
              case 404: messageText = 'Requested page could not be found'; break;
              case 500: messageText = 'There has been an unexpected server error, please contact administrator'; break;
              case 501: messageText = 'This functionality is yet to be implemented'; break;
              case 503: messageText = 'Server is currently unavailable, please try after some time';
          }
          if(messageText) {
            this.globalMessageService.setMessage({
              iconShape: 'exclamation-triangle',
              styleClasses: 'alert-danger',
              text: messageText
            });
          }
        }
        console.log(errorMsg);
        return throwError(error);
      })
    );
  }
}
