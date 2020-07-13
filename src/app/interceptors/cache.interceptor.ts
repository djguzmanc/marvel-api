import { Injectable } from '@angular/core';
import {
  HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse
} from '@angular/common/http';
import { CacheService } from '@domain/application/observable-services';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';

/**
 * Handles the http response caching
 */
@Injectable()
export class CacheInterceptor implements HttpInterceptor {

  constructor(
    private readonly cacheService: CacheService
  ) {}

  // tslint:disable-next-line: completed-docs
  intercept(req: HttpRequest<any>, next: HttpHandler) {

    const cacheOwner = req.headers.get('Cache-Owner') || 'Common';

    const cachedResponse = this.cacheService.get(cacheOwner, req);
    if (cachedResponse) {
      return of(cachedResponse);
    }

    return next.handle(req).pipe(
      tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          if (req.method === 'GET') {
            this.cacheService.put(cacheOwner, req, event);
          }
        }
      }),
    );
  }
}
