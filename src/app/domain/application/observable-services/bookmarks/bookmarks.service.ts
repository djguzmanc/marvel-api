import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MarvelEntity } from '@domain/model/enums';
import { IBookmark } from '@utils/interfaces/auxiliary/bookmark.interface';

/**
 * Handles bookmarks state
 */
@Injectable({
  providedIn: 'root'
})
export class BookmarksService {
  private readonly bookmarks = new BehaviorSubject<{
    [key: string]: IBookmark;
  }>({});

  bookmarks$ = this.bookmarks.asObservable();

  /**
   * Adds a new bookmark
   * @param url The new url
   */
  addBookmark(url: string, type: MarvelEntity, name: string): void {
    const newMap = { ...this.bookmarks.value };
    newMap[url] = {
      type,
      name
    };
    this.bookmarks.next(newMap);
  }

  /**
   * Removes a bookmarks
   * @param url The url to remove
   */
  removeBookmark(url: string): void {
    const newMap = { ...this.bookmarks.value };
    delete newMap[url];
    this.bookmarks.next(newMap);
  }
}
