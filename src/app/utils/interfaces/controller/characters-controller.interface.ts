import { Observable } from 'rxjs';
import { IMarvelResponse, IPaginationOptions, ICharactersOptions } from '../auxiliary';
import { IMarvelCollection } from '../auxiliary/marvel-collection.interface';
import { ICharactersResponse } from '../response';
import { IFacadeApiMap } from '../auxiliary/facade-api-map.interface';

/**
 * Describes the interface for both API and Facade
 * characters controller
 */
export interface ICharactersController {
  // tslint:disable-next-line: completed-docs
  getAll(options: Partial<IPaginationOptions & ICharactersOptions>): Observable<
    IMarvelResponse<IMarvelCollection<ICharactersResponse>> |
    IFacadeApiMap<IMarvelCollection<ICharactersResponse>>>;
}
