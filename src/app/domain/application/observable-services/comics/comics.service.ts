import { Injectable } from '@angular/core';
import { IComicsResponse } from '@utils/interfaces/response';
import { BehaviorSubject } from 'rxjs';

/**
 * Handles comics state
 */
@Injectable({
  providedIn: 'root'
})
export class ComicsService {

  /**
   * The comic subject
   */
  private readonly comic = new BehaviorSubject<IComicsResponse | null>(null);

  /**
   * Expose comic subject as observable
   */
  readonly comic$ = this.comic.asObservable();

  /**
   * Saves a new comic on state
   * @param comic The new comic
   */
  cacheComic(comic: IComicsResponse): void {
    this.comic.next(comic);
  }

}
