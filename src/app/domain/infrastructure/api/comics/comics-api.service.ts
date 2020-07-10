import { Injectable } from '@angular/core';
import { IComicsController } from '@utils/interfaces/controller';
import { HttpClient } from '@angular/common/http';
import { IPaginationOptions, IMarvelResponse, IMarvelCollection } from '@utils/interfaces/auxiliary';
import { Observable } from 'rxjs';
import { IComicsResponse } from '@utils/interfaces/response';
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
   * Fetches all comics
   * @param options Filtering options
   */
  getAll(options: Partial<IPaginationOptions & IComicsOptions>):
    Observable<IMarvelResponse<IMarvelCollection<IComicsResponse>>> {
    return this.http.get<IMarvelResponse<IMarvelCollection<IComicsResponse>>>(
      '/comics', {
        params: parseParams(options)
      }
    );
  }
}
