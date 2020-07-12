import { IPaginationOptions, IMarvelResponse, IMarvelCollection, IFacadeApiMap, IComicsOptions } from '../auxiliary';
import { Observable } from 'rxjs';
import { IComicsResponse, IStoriesResponse, ICharactersResponse } from '../response';

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

  // tslint:disable-next-line: completed-docs
  getById(id: number):
    Observable<
      IMarvelResponse<IMarvelCollection<IComicsResponse>> |
      IFacadeApiMap<IComicsResponse>
    >;

  // tslint:disable-next-line: completed-docs
  getStoriesByComic(comicId: number, options: Partial<IPaginationOptions>):
    Observable<
      IMarvelResponse<IMarvelCollection<IStoriesResponse>> |
      IFacadeApiMap<IMarvelCollection<IStoriesResponse>>
    >;

  // tslint:disable-next-line: completed-docs
  getCharactersByComic(comicId: number, options: Partial<IPaginationOptions>):
    Observable<
      IMarvelResponse<IMarvelCollection<ICharactersResponse>> |
      IFacadeApiMap<IMarvelCollection<ICharactersResponse>>
    >;
}
