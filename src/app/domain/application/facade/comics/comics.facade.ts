import { Injectable } from '@angular/core';
import { IComicsController } from '@utils/interfaces/controller';
import { ComicsApiService } from '@domain/infrastructure/api';
import { IPaginationOptions, IFacadeApiMap, IMarvelCollection, IComicFilter, IComicsOptions } from '@utils/interfaces/auxiliary';
import { Observable } from 'rxjs';
import { IComicsResponse } from '@utils/interfaces/response';
import { map, catchError } from 'rxjs/operators';
import { errorHandler } from '@utils/functions';

/**
 * Handles all data consumption for
 * comics controller
 */
@Injectable({
  providedIn: 'root'
})
export class ComicsFacade implements IComicsController {

  constructor(
    private readonly api: ComicsApiService
  ) { }

  /**
   * Handles the comics request
   * @param options Filtering options
   */
  getAll(options: Partial<IPaginationOptions & IComicsOptions>):
    Observable<IFacadeApiMap<IMarvelCollection<IComicsResponse>>> {
    return this.api.getAll(options).pipe(
      map(res => ({ payload: res.data })),
      catchError(err => errorHandler(err))
    );
  }

  /**
   * Maps all comics into single filtering
   * objects
   * @param options Filtering options
   */
  getAllForFiltering(options: Partial<IPaginationOptions & IComicsOptions>):
    Observable<IFacadeApiMap<IMarvelCollection<IComicFilter>>> {
    return this.getAll(options).pipe(
      map(res => {
        if (res.payload) {
          return {
            payload: {
              ...res.payload,
              results: res.payload.results.map(item => ({
                value: item.id,
                label: item.title
              }))
            }
          };
        } else {
          return { err: res.err };
        }
      })
    );
  }

}
