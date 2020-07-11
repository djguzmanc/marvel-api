import { Observable } from 'rxjs';
import { IMarvelResponse, IPaginationOptions, ICharactersOptions } from '../auxiliary';
import { IMarvelCollection } from '../auxiliary/marvel-collection.interface';
import { ICharactersResponse, IComicsResponse, IStoriesResponse } from '../response';
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

  // tslint:disable-next-line: completed-docs
  getById(id: number): Observable<
    IMarvelResponse<IMarvelCollection<ICharactersResponse>> |
    IFacadeApiMap<ICharactersResponse>>;

  // tslint:disable-next-line: completed-docs
  getComicsByCharacter(characterId: number, options: Partial<IPaginationOptions>):
    Observable<
      IMarvelResponse<IMarvelCollection<IComicsResponse>> |
      IFacadeApiMap<IMarvelCollection<IComicsResponse>>
    >;

  // tslint:disable-next-line: completed-docs
  getStoriesByCharacter(characterId: number, options: Partial<IPaginationOptions>):
    Observable<
      IMarvelResponse<IMarvelCollection<IStoriesResponse>> |
      IFacadeApiMap<IMarvelCollection<IStoriesResponse>>
    >;
}
