import { Injectable } from '@angular/core';
import { ICharactersController } from '@utils/interfaces/controller';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMarvelResponse, IPaginationOptions, ICharactersOptions } from '@utils/interfaces/auxiliary';
import { IMarvelCollection } from '@utils/interfaces/auxiliary';
import { ICharactersResponse } from '@utils/interfaces/response';
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
   * Fetches all characters
   */
  getAll(options: Partial<IPaginationOptions & ICharactersOptions>):
    Observable<IMarvelResponse<IMarvelCollection<ICharactersResponse>>> {
    return this.http.get<IMarvelResponse<IMarvelCollection<ICharactersResponse>>>(
      '/characters', {
      params: parseParams(options)
    });
  }
}
