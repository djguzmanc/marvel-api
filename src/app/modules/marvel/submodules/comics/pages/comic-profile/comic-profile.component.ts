import { Component, OnInit, OnDestroy } from '@angular/core';
import { CHARACTERS_ROUTE, STORIES_ROUTE, COMICS_DETAIL } from '@utils/constants';
import { IComicsResponse } from '@utils/interfaces/response';
import { Observable } from 'rxjs';
import { IFacadeApiMap } from '@utils/interfaces/auxiliary';
import { ComicsFacade } from '@domain/application/facade';
import { ActivatedRoute, Router } from '@angular/router';
import { EntityProfile } from '@utils/classes';
import { BookmarksFacade } from '@domain/application/facade/bookmarks/bookmarks.facade';
import { MarvelEntity } from '@domain/model/enums';

/**
 * `Smart component` for displaying the comic
 * detailed info
 */
@Component({
  templateUrl: './comic-profile.component.html',
  styleUrls: ['./comic-profile.component.scss']
})
export class ComicProfileComponent extends EntityProfile implements OnInit, OnDestroy {

  slideConfig = { arrows: true, dots: true, slidesToShow: 1, slidesToScroll: 1 };

  readonly type = MarvelEntity.COMICS;
  comic$!: Observable<IFacadeApiMap<IComicsResponse>>;

  constructor(
    private readonly comicsFacade: ComicsFacade,
    private readonly route: ActivatedRoute,
    public readonly router: Router,
    public readonly bookmarksFacade: BookmarksFacade
  ) { super(router, bookmarksFacade); }

  // tslint:disable-next-line: completed-docs
  ngOnInit(): void {
    this.comic$ = this.comicsFacade.getById(this.route.snapshot.params[COMICS_DETAIL]);
    this.initializeRoutes(CHARACTERS_ROUTE, STORIES_ROUTE);
  }

  // tslint:disable-next-line: completed-docs
  ngOnDestroy(): void {
    this.subsink.unsubscribe();
  }
}
