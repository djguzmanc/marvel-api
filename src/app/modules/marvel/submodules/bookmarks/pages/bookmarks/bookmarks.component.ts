import { Component, OnInit } from '@angular/core';
import { BookmarksFacade } from '@domain/application/facade/bookmarks/bookmarks.facade';
import { Observable } from 'rxjs';
import { IBookmark } from '@utils/interfaces/auxiliary/bookmark.interface';

/**
 * `Smart component` for listing all saved bookmarks
 */
@Component({
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent implements OnInit {

  bookmarks$!: Observable<{
    [key: string]: IBookmark;
  }>;

  constructor(
    private readonly bookmarkFacade: BookmarksFacade
  ) { }

  // tslint:disable-next-line: completed-docs
  ngOnInit(): void {
    this.bookmarks$ = this.bookmarkFacade.bookmarks$;
  }

  /**
   * Removes a bookmark
   * @param url The bookmark url
   */
  removeBookmark(url: string): void {
    this.bookmarkFacade.removeBookmark(url);
  }

}
