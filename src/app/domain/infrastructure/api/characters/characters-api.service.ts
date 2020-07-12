import { Injectable } from '@angular/core';
import { ICharactersController } from '@utils/interfaces/controller';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMarvelResponse, IPaginationOptions, ICharactersOptions } from '@utils/interfaces/auxiliary';
import { IMarvelCollection } from '@utils/interfaces/auxiliary';
import { ICharactersResponse, IComicsResponse, IStoriesResponse } from '@utils/interfaces/response';
import { parseParams } from '@utils/functions';

/**
 * Makes all Http request for characters
 * controller
 */
@Injectable({
  providedIn: 'root'
})
export class CharactersApiService implements ICharactersController {

  constructor(
    private readonly http: HttpClient
  ) { }

  /**
   * Fetches all character's stories
   * @param characterId Character id
   * @param options Filtering options
   */
  getStoriesByCharacter(characterId: number, options: Partial<IPaginationOptions>):
    Observable<IMarvelResponse<IMarvelCollection<IStoriesResponse>>> {
    return this.http.get<IMarvelResponse<IMarvelCollection<IStoriesResponse>>>(
      `/characters/${characterId}/stories`, {
      params: parseParams(options)
    });
  }

  /**
   * Fetches all the character comics
   * @param characterId The character id
   * @param options Filtering options
   */
  getComicsByCharacter(characterId: number, options: Partial<IPaginationOptions>):
    Observable<IMarvelResponse<IMarvelCollection<IComicsResponse>>> {
    return this.http.get<IMarvelResponse<IMarvelCollection<IComicsResponse>>>(
      `/characters/${characterId}/comics`, {
      params: parseParams(options)
    });
  }

  /**
   * Fetch a character by id
   * @param id The character id
   */
  getById(id: number): Observable<IMarvelResponse<IMarvelCollection<ICharactersResponse>>> {
    return this.http.get<IMarvelResponse<IMarvelCollection<ICharactersResponse>>>(
      `/characters/${id}`
    );
  }

  /**
   * Fetches all characters
   * @param options Filtering options
   */
  getAll(options: Partial<IPaginationOptions & ICharactersOptions>):
    Observable<IMarvelResponse<IMarvelCollection<ICharactersResponse>>> {
    return this.http.get<IMarvelResponse<IMarvelCollection<ICharactersResponse>>>(
      '/characters', {
      params: parseParams(options)
    });
  }
}
