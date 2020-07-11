import { Injectable } from '@angular/core';
import { ICharactersController } from '@utils/interfaces/controller';
import { CharactersApiService } from '@domain/infrastructure/api';
import { Observable, of } from 'rxjs';
import { IFacadeApiMap, IPaginationOptions, ICharactersOptions } from '@utils/interfaces/auxiliary';
import { IMarvelCollection } from '@utils/interfaces/auxiliary';
import { ICharactersResponse, IComicsResponse, IStoriesResponse } from '@utils/interfaces/response';
import { map, catchError, switchMap, take } from 'rxjs/operators';
import { errorHandler } from '@utils/functions';
import { CharacterService } from '@domain/application/observable-services';

/**
 * Handles all data consumption for
 * characters controller
 */
@Injectable({
  providedIn: 'root'
})
export class CharactersFacade implements ICharactersController {

  constructor(
    private readonly api: CharactersApiService,
    private readonly characterOs: CharacterService
  ) { }

  /**
   * handles the character's stories request
   * @param characterId Character id
   * @param options Filtering options
   */
  getStoriesByCharacter(characterId: number, options: Partial<IPaginationOptions>):
    Observable<IFacadeApiMap<IMarvelCollection<IStoriesResponse>>> {
    return this.api.getStoriesByCharacter(characterId, options).pipe(
      map(res => ({ payload: res.data })),
      catchError(err => errorHandler(err))
    );
  }

  /**
   * Handles the character's comics request
   * @param characterId THe character id
   * @param options Filtering options
   */
  getComicsByCharacter(characterId: number, options: Partial<IPaginationOptions>):
    Observable<IFacadeApiMap<IMarvelCollection<IComicsResponse>>> {
    return this.api.getComicsByCharacter(characterId, options).pipe(
      map(res => ({ payload: res.data })),
      catchError(err => errorHandler(err))
    );
  }

  /**
   * Handles the character by id request
   * @param id The character id
   */
  getById(id: number): Observable<IFacadeApiMap<ICharactersResponse>> {
    return this.characterOs.character$.pipe(
      switchMap(res => {
        if (res) {
          return of(res);
        }
        return this.api.getById(id).pipe(
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
  getAll(options: Partial<IPaginationOptions & ICharactersOptions>):
    Observable<IFacadeApiMap<IMarvelCollection<ICharactersResponse>>> {
    return this.api.getAll(options).pipe(
      map(res => ({ payload: res.data })),
      catchError(err => errorHandler(err))
    );
  }

  /**
   * Saves a new character on state
   * @param character The new character
   */
  cacheCharacter(character: ICharactersResponse): void {
    this.characterOs.cacheCharacter(character);
  }

}
