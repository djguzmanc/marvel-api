import { Component, OnInit } from '@angular/core';
import { CHARACTERS_ROUTE, CHARACTERS_INDEX, COMICS_ROUTE, COMICS_INDEX, BOOKMARKS_ROUTE, BOOKMARKS_INDEX } from '@utils/constants';
import { Observable } from 'rxjs';
import { IBookmark } from '@utils/interfaces/auxiliary/bookmark.interface';
import { BookmarksFacade } from '@domain/application/facade/bookmarks/bookmarks.facade';

/**
 * Marvel module wrapper
 */
@Component({
  templateUrl: './marvel-wrapper.component.html',
  styleUrls: ['./marvel-wrapper.component.scss']
})
export class MarvelWrapperComponent implements OnInit {

  readonly BOOKMARKS = `${BOOKMARKS_ROUTE}/${BOOKMARKS_INDEX}`;
  readonly ALL_CHARACTERS = `${CHARACTERS_ROUTE}/${CHARACTERS_INDEX}`;
  readonly ALL_COMICS = `${COMICS_ROUTE}/${COMICS_INDEX}`;

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
}
