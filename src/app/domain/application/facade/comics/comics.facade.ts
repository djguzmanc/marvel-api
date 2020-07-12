import { Injectable } from '@angular/core';
import { IComicsController } from '@utils/interfaces/controller';
import { MasterApiService } from '@domain/infrastructure/api';
import { IPaginationOptions, IFacadeApiMap, IMarvelCollection, IComicFilter, IComicsOptions } from '@utils/interfaces/auxiliary';
import { Observable, of } from 'rxjs';
import { IComicsResponse, IStoriesResponse, ICharactersResponse } from '@utils/interfaces/response';
import { map, catchError, switchMap } from 'rxjs/operators';
import { errorHandler } from '@utils/functions';
import { ComicsService } from '@domain/application/observable-services';
import { MarvelEntity } from '@domain/model/enums';

/**
 * Handles all data consumption for
 * comics controller
 */
@Injectable({
  providedIn: 'root'
})
export class ComicsFacade implements IComicsController {

  private readonly entityName = MarvelEntity.COMICS;

  constructor(
    private readonly api: MasterApiService<IComicsResponse>,
    private readonly comicOs: ComicsService
  ) { }

  /**
   * Handles the characters by comic request
   * @param comicId Comic id
   * @param options Filtering options
   */
  getCharactersByComic(comicId: number, options: Partial<IPaginationOptions>):
    Observable<IFacadeApiMap<IMarvelCollection<ICharactersResponse>>> {
    return this.api.getSubCollection<ICharactersResponse>(
      comicId,
      this.entityName,
      MarvelEntity.CHARACTERS,
      options
    ).pipe(
      map(res => ({ payload: res.data })),
      catchError(err => errorHandler(err))
    );
  }

  /**
   * Handles the stories by comic request
   * @param comicId Comic id
   * @param options Filtering options
   */
  getStoriesByComic(comicId: number, options: Partial<IPaginationOptions>):
    Observable<IFacadeApiMap<IMarvelCollection<IStoriesResponse>>> {
    return this.api.getSubCollection<IStoriesResponse>(
      comicId,
      this.entityName,
      MarvelEntity.STORIES,
      options
    ).pipe(
      map(res => ({ payload: res.data })),
      catchError(err => errorHandler(err))
    );
  }

  /**
   * Handles the comic by id request
   * @param id Comic id
   */
  getById(id: number): Observable<IFacadeApiMap<IComicsResponse>> {
    return this.comicOs.comic$.pipe(
      switchMap(res => {
        if (res) {
          return of(res);
        }
        return this.api.getById(id, this.entityName).pipe(
          map(apiRes => apiRes.data.results[0])
        );
      }),
      map(res => ({ payload: res })),
      catchError(err => errorHandler(err))
    );
  }

  /**
   * Handles the comics request
   * @param options Filtering options
   */
  getAll(options: Partial<IPaginationOptions & IComicsOptions>):
    Observable<IFacadeApiMap<IMarvelCollection<IComicsResponse>>> {
    return this.api.getAll(this.entityName, options).pipe(
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

  /**
   * Caches a comic
   * @param comic The comic to cache
   */
  cacheComic(comic: IComicsResponse): void {
    this.comicOs.cacheComic(comic);
  }

}
