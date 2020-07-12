import { Component, OnInit } from '@angular/core';
import { COMICS_DETAIL } from '@utils/constants';
import { Observable } from 'rxjs';
import { IFacadeApiMap, IMarvelCollection } from '@utils/interfaces/auxiliary';
import { IStoriesResponse } from '@utils/interfaces/response';
import { ComicsFacade } from '@domain/application/facade';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';
import { EntityList } from '@utils/classes';

/**
 * Smart component for displaying the comic
 * stories
 */
@Component({
  templateUrl: './comic-stories.component.html',
  styleUrls: ['./comic-stories.component.scss']
})
export class ComicStoriesComponent extends EntityList implements OnInit {

  stories$!: Observable<IFacadeApiMap<IMarvelCollection<IStoriesResponse>>>;

  displayedColumns: string[] = ['type', 'title', 'description'];

  constructor(
    private readonly comicsFacade: ComicsFacade,
    private readonly route: ActivatedRoute
  ) { super(); }

  // tslint:disable-next-line: completed-docs
  ngOnInit(): void {
    this.initializeEntity();
  }

  /**
   * Initializes stories data
   */
  initializeEntity(): void {
    const id = this.route.parent?.snapshot.params[COMICS_DETAIL];
    if (id) {
      this.stories$ = this.comicsFacade.getStoriesByComic(id, {
        limit: this.pageSize,
        offset: this.pageSize * this.currentPage,
      }).pipe(
        tap(res => {
          if (res.payload) {
            this.totalItems = res.payload.total;
          }
        })
      );
    }
  }
}
