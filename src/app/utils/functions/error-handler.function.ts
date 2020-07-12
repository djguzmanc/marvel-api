import { HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs/internal/observable/of';
import { Observable } from 'rxjs';

/**
 * Handles a common http error
 * @param err The error
 */
export const errorHandler = (err: any): Observable<{ err: string }> => {
  if (err instanceof HttpErrorResponse) {
    return of({ err: err.error.status });
  }
  return of({ err: 'Unexpected error' });
};
