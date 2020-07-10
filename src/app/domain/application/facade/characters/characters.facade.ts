import { Injectable } from '@angular/core';
import { ICharactersController } from '@utils/interfaces/controller';
import { CharactersApiService } from '@domain/infrastructure/api';
import { Observable } from 'rxjs';
import { IFacadeApiMap, IPaginationOptions, ICharactersOptions } from '@utils/interfaces/auxiliary';
import { IMarvelCollection } from '@utils/interfaces/auxiliary';
import { ICharactersResponse } from '@utils/interfaces/response';
import { map, catchError } from 'rxjs/operators';
import { errorHandler } from '@utils/functions';

/**
 * Handles all data consumption for
 * characters controller
 */
@Injectable({
  providedIn: 'root'
})
export class CharactersFacade implements ICharactersController {

  constructor(
    private readonly api: CharactersApiService
  ) { }

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

}
