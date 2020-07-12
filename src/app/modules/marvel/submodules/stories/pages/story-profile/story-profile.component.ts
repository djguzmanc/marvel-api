import { Component, OnInit, OnDestroy } from '@angular/core';
import { EntityProfile } from '@utils/classes';
import { IStoriesResponse } from '@utils/interfaces/response';
import { Observable } from 'rxjs';
import { IFacadeApiMap } from '@utils/interfaces/auxiliary';
import { StoriesFacade } from '@domain/application/facade';
import { ActivatedRoute, Router } from '@angular/router';
import { STORIES_DETAIL, COMICS_ROUTE, CHARACTERS_ROUTE } from '@utils/constants';
import { BookmarksFacade } from '@domain/application/facade/bookmarks/bookmarks.facade';
import { MarvelEntity } from '@domain/model/enums';

/**
 * `Smart component` for displaying a story
 * profile
 */
@Component({
  templateUrl: './story-profile.component.html',
  styleUrls: ['./story-profile.component.scss']
})
export class StoryProfileComponent extends EntityProfile implements OnInit, OnDestroy {

  readonly type = MarvelEntity.STORIES;
  story$!: Observable<IFacadeApiMap<IStoriesResponse>>;

  constructor(
    private readonly storiesFacade: StoriesFacade,
    private readonly route: ActivatedRoute,
    public readonly router: Router,
    public readonly bookmarksFacade: BookmarksFacade
  ) { super(router, bookmarksFacade); }

  // tslint:disable-next-line: completed-docs
  ngOnInit(): void {
    this.story$ = this.storiesFacade.getById(this.route.snapshot.params[STORIES_DETAIL]);
    this.initializeRoutes(CHARACTERS_ROUTE, COMICS_ROUTE);
  }

  // tslint:disable-next-line: completed-docs
  ngOnDestroy(): void {
    this.subsink.unsubscribe();
  }

}
