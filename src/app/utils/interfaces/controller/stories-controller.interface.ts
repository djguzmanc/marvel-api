import { IStoriesResponse, IComicsResponse, ICharactersResponse } from '../response';
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

  // tslint:disable-next-line: completed-docs
  getById(id: number):
    Observable<
      IMarvelResponse<IMarvelCollection<IStoriesResponse>> |
      IFacadeApiMap<IStoriesResponse>
    >;

  // tslint:disable-next-line: completed-docs
  getComicsByStory(storyId: number, options: Partial<IPaginationOptions>):
    Observable<
      IMarvelResponse<IMarvelCollection<IComicsResponse>> |
      IFacadeApiMap<IMarvelCollection<IComicsResponse>>
    >;

  // tslint:disable-next-line: completed-docs
  getCharactersByStory(storyId: number, options: Partial<IPaginationOptions>):
    Observable<
      IMarvelResponse<IMarvelCollection<ICharactersResponse>> |
      IFacadeApiMap<IMarvelCollection<ICharactersResponse>>
    >;
}
