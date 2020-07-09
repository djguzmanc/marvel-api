import { Injectable } from '@angular/core';
import {
  HttpInterceptor, HttpHandler, HttpRequest, HttpResponse
} from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { environment } from 'environments/environment';
import { throwError } from 'rxjs';

/**
 * Logs the request at console
 */
@Injectable()
export class RequestLoggerInterceptor implements HttpInterceptor {
  // tslint:disable-next-line: completed-docs
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req).pipe(
      tap(_req => {
        if (_req instanceof HttpResponse && !environment.production) {
          console.log(_req);
        }
      }),
      catchError(err => {
        if (!environment.production) {
          console.log(err);
        }
        return throwError(err);
      })
    );
  }
}
