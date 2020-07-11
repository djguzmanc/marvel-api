import { Injectable } from '@angular/core';
import { IStoriesController } from '@utils/interfaces/controller';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPaginationOptions, IStoriesOptions, IMarvelResponse, IMarvelCollection } from '@utils/interfaces/auxiliary';
import { IStoriesResponse } from '@utils/interfaces/response';
import { parseParams } from '@utils/functions';

/**
 * Makes all Http request for stories
 * controller
 */
@Injectable({
  providedIn: 'root'
})
export class StoriesApiService implements IStoriesController {

  constructor(
    private readonly http: HttpClient
  ) { }

  /**
   * Fetches all stories
   * @param options Filtering options
   */
  getAll(options: Partial<IPaginationOptions & IStoriesOptions>):
    Observable<IMarvelResponse<IMarvelCollection<IStoriesResponse>>> {
    return this.http.get<IMarvelResponse<IMarvelCollection<IStoriesResponse>>>(
      '/stories', {
      params: parseParams(options)
    }
    );
  }
}
