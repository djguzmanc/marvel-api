import { Injectable } from '@angular/core';
import { BookmarksService } from '@domain/application/observable-services/bookmarks/bookmarks.service';
import { Observable } from 'rxjs';
import { MarvelEntity } from '@domain/model/enums';
import { IBookmark } from '@utils/interfaces/auxiliary/bookmark.interface';

/**
 * Handle the bookmarks state
 * communication
 */
@Injectable({
  providedIn: 'root'
})
export class BookmarksFacade {

  constructor(
    private readonly state: BookmarksService
  ) { }

  /**
   * Exposes bookmarks url observable
   */
  get bookmarks$(): Observable<{
    [key: string]: IBookmark;
  }> {
    return this.state.bookmarks$;
  }

  /**
   * Adds a new bookmark
   * @param url The new url
   */
  addBookmark(url: string, type: MarvelEntity, name: string): void {
    this.state.addBookmark(url, type, name);
  }

  /**
   * Removes a bookmarks
   * @param url The url to remove
   */
  removeBookmark(url: string): void {
    this.state.removeBookmark(url);
  }
}
