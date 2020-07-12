import { Component, OnInit } from '@angular/core';
import { CHARACTERS_ROUTE, STORIES_ROUTE, COMICS_DETAIL } from '@utils/constants';
import { IComicsResponse } from '@utils/interfaces/response';
import { Observable } from 'rxjs';
import { IFacadeApiMap } from '@utils/interfaces/auxiliary';
import { ComicsFacade } from '@domain/application/facade';
import { ActivatedRoute, Router } from '@angular/router';
import { EntityProfile } from '@utils/classes';

/**
 * `Smart component` for displaying the comic
 * detailed info
 */
@Component({
  templateUrl: './comic-profile.component.html',
  styleUrls: ['./comic-profile.component.scss']
})
export class ComicProfileComponent extends EntityProfile implements OnInit {

  slideConfig = { arrows: true, dots: true, slidesToShow: 1, slidesToScroll: 1 };

  comic$!: Observable<IFacadeApiMap<IComicsResponse>>;

  constructor(
    private readonly comicsFacade: ComicsFacade,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) { super(); }

  // tslint:disable-next-line: completed-docs
  ngOnInit(): void {
    this.comic$ = this.comicsFacade.getById(this.route.snapshot.params[COMICS_DETAIL]);
    this.initializeRoutes(this.router, CHARACTERS_ROUTE, STORIES_ROUTE);
  }
}
