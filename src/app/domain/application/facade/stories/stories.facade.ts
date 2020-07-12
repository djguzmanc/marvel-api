import { Injectable } from '@angular/core';
import { IStoriesController } from '@utils/interfaces/controller';
import { MasterApiService } from '@domain/infrastructure/api';
import { IPaginationOptions, IStoriesOptions, IFacadeApiMap, IMarvelCollection } from '@utils/interfaces/auxiliary';
import { Observable, of } from 'rxjs';
import { IStoriesResponse, ICharactersResponse, IComicsResponse } from '@utils/interfaces/response';
import { map, catchError, switchMap, take } from 'rxjs/operators';
import { errorHandler } from '@utils/functions';
import { MarvelEntity } from '@domain/model/enums';
import { StoriesService } from '@domain/application/observable-services';

/**
 * Handles all data consumption for
 * stories controller
 */
@Injectable({
  providedIn: 'root'
})
export class StoriesFacade implements IStoriesController {

  private readonly entityName = MarvelEntity.STORIES;

  constructor(
    private readonly api: MasterApiService<IStoriesResponse>,
    private readonly storiesOs: StoriesService
  ) { }

  /**
   * handles the character's stories request
   * @param characterId Character id
   * @param options Filtering options
   */
  getCharactersByStory(characterId: number, options: Partial<IPaginationOptions>):
    Observable<IFacadeApiMap<IMarvelCollection<ICharactersResponse>>> {
    return this.api.getSubCollection<ICharactersResponse>(
      characterId,
      this.entityName,
      MarvelEntity.STORIES,
      options
    ).pipe(
      map(res => ({ payload: res.data })),
      catchError(err => errorHandler(err))
    );
  }

  /**
   * Handles the character's comics request
   * @param characterId THe character id
   * @param options Filtering options
   */
  getComicsByStory(characterId: number, options: Partial<IPaginationOptions>):
    Observable<IFacadeApiMap<IMarvelCollection<IComicsResponse>>> {
    return this.api.getSubCollection<IComicsResponse>(
      characterId,
      this.entityName,
      MarvelEntity.COMICS,
      options
    ).pipe(
      map(res => ({ payload: res.data })),
      catchError(err => errorHandler(err))
    );
  }

  /**
   * Handles the character by id request
   * @param id The character id
   */
  getById(id: number): Observable<IFacadeApiMap<IStoriesResponse>> {
    return this.storiesOs.story$.pipe(
      switchMap(res => {
        if (res) {
          return of(res);
        }
        return this.api.getById(id, this.entityName).pipe(
          map(apiRes => apiRes.data.results[0])
        );
      }),
      take(1),
      map(res => ({ payload: res })),
      catchError(err => errorHandler(err))
    );
  }

  /**
   * Handles the characters request
   * @param options Filtering options
   */
  getAll(options: Partial<IPaginationOptions & IStoriesOptions>):
    Observable<IFacadeApiMap<IMarvelCollection<IStoriesResponse>>> {
    return this.api.getAll(this.entityName, options).pipe(
      map(res => ({ payload: res.data })),
      catchError(err => errorHandler(err))
    );
  }

  /**
   * Saves a new story on state
   * @param story The new story
   */
  cacheStory(story: IStoriesResponse): void {
    this.storiesOs.cacheStory(story);
  }
}
