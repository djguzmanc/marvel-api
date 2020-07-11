import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

/**
 * Adds/clean some common headers and
 * particular meta headers to the request
 */
@Injectable()
export class CommonHeadersInterceptor implements HttpInterceptor {
  // tslint:disable-next-line: completed-docs
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (!req.headers.has('contentType')) {
      req = req.clone({
        headers: req.headers.append('contentType', 'application/json')
      });
    }
    return next.handle(req);
  }
}
