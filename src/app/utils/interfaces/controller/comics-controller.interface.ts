import { IPaginationOptions, IMarvelResponse, IMarvelCollection, IFacadeApiMap, IComicsOptions } from '../auxiliary';
import { Observable } from 'rxjs';
import { IComicsResponse } from '../response';

/**
 * Describes the interface for both API and Facade
 * comics controller
 */
export interface IComicsController {
  // tslint:disable-next-line: completed-docs
  getAll(options: Partial<IPaginationOptions & IComicsOptions>):
    Observable<
      IMarvelResponse<IMarvelCollection<IComicsResponse>> |
      IFacadeApiMap<IMarvelCollection<IComicsResponse>>
    >;
}
