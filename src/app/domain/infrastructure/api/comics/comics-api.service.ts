import { Injectable } from '@angular/core';
import { IComicsController } from '@utils/interfaces/controller';
import { HttpClient } from '@angular/common/http';
import { IPaginationOptions, IMarvelResponse, IMarvelCollection } from '@utils/interfaces/auxiliary';
import { Observable } from 'rxjs';
import { IComicsResponse, IStoriesResponse, ICharactersResponse } from '@utils/interfaces/response';
import { parseParams } from '@utils/functions';
import { IComicsOptions } from '@utils/interfaces/auxiliary/comics-options.interface';

/**
 * Makes all Http request for comics
 * controller
 */
@Injectable({
  providedIn: 'root'
})
export class ComicsApiService implements IComicsController {

  constructor(
    private readonly http: HttpClient
  ) { }

  /**
   * Fetches characters by comic
   * @param comicId The comic id
   * @param options Filtering options
   */
  getCharactersByComic(comicId: number, options: Partial<IPaginationOptions>):
    Observable<IMarvelResponse<IMarvelCollection<ICharactersResponse>>> {
    return this.http.get<IMarvelResponse<IMarvelCollection<ICharactersResponse>>>(
      `/comics/${comicId}/characters`, {
      params: parseParams(options)
    });
  }

  /**
   * Fetches stories by comic
   * @param comicId The comic id
   * @param options Filtering options
   */
  getStoriesByComic(comicId: number, options: Partial<IPaginationOptions>):
    Observable<IMarvelResponse<IMarvelCollection<IStoriesResponse>>> {
    return this.http.get<IMarvelResponse<IMarvelCollection<IStoriesResponse>>>(
      `/comics/${comicId}/stories`, {
      params: parseParams(options)
    });
  }

  /**
   * Fetches a comic by id
   * @param id The comic id
   */
  getById(id: number): Observable<IMarvelResponse<IMarvelCollection<IComicsResponse>>> {
    return this.http.get<IMarvelResponse<IMarvelCollection<IComicsResponse>>>(
      `/comics/${id}`
    );
  }

  /**
   * Fetches all comics
   * @param options Filtering options
   */
  getAll(options: Partial<IPaginationOptions & IComicsOptions>):
    Observable<IMarvelResponse<IMarvelCollection<IComicsResponse>>> {
    return this.http.get<IMarvelResponse<IMarvelCollection<IComicsResponse>>>(
      '/comics', {
      params: parseParams(options)
    });
  }
}
