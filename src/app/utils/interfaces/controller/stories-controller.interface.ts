import { IStoriesResponse } from '../response';
import { IStoriesOptions, IPaginationOptions, IMarvelResponse, IMarvelCollection, IFacadeApiMap } from '../auxiliary';
import { Observable } from 'rxjs';

/**
 * Describes the interface for both API and Facade
 * stories controller
 */
export interface IStoriesController {
  // tslint:disable-next-line: completed-docs
  getAll(options: Partial<IPaginationOptions & IStoriesOptions>):
    Observable<
      IMarvelResponse<IMarvelCollection<IStoriesResponse>> |
      IFacadeApiMap<IMarvelCollection<IStoriesResponse>>
    >;
}
