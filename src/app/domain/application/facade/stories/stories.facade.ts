import { Injectable } from '@angular/core';
import { IStoriesController } from '@utils/interfaces/controller';
import { StoriesApiService } from '@domain/infrastructure/api';
import { IPaginationOptions, IStoriesOptions, IFacadeApiMap, IMarvelCollection } from '@utils/interfaces/auxiliary';
import { Observable } from 'rxjs';
import { IStoriesResponse } from '@utils/interfaces/response';
import { map, catchError } from 'rxjs/operators';
import { errorHandler } from '@utils/functions';

/**
 * Handles all data consumption for
 * stories controller
 */
@Injectable({
  providedIn: 'root'
})
export class StoriesFacade implements IStoriesController {

  constructor(
    private readonly api: StoriesApiService
  ) { }

  /**
   * Handles the stories request
   * @param options Filtering options
   */
  getAll(options: Partial<IPaginationOptions & IStoriesOptions>):
    Observable<IFacadeApiMap<IMarvelCollection<IStoriesResponse>>> {
    return this.api.getAll(options).pipe(
      map(res => ({ payload: res.data })),
      catchError(err => errorHandler(err))
    );
  }
}
