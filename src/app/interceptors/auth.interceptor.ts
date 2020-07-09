import { Injectable } from '@angular/core';
import {
  HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';
import { environment } from 'environments/environment';

/**
 * Handles all auth http intercept stuff
 */
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  // tslint:disable-next-line: completed-docs
  intercept(req: HttpRequest<any>, next: HttpHandler) {

    req = req.clone({
      url: `${environment.apiUrl}${req.url}`,
      setParams: {
        apikey: environment.publicMarvelKey,
        ts: environment.ts,
        hash: environment.hash,
      }
    });

    return next.handle(req);
  }
}
