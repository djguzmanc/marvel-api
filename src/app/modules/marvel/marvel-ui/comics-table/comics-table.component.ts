import { Component, OnInit } from '@angular/core';
import { IComicsResponse } from '@utils/interfaces/response';
import { EntityTableComponent } from '../entity-table/entity-table.component';
import { ComicsFacade } from '@domain/application/facade';
import { Router } from '@angular/router';
import { MARVEL_BASE_ROUTE, COMICS_ROUTE } from '@utils/constants';
import { FADE_IN_OUT } from '@utils/animations';

/**
 * `Dumb component` for displaying a
 * comic list
 */
@Component({
  selector: 'ma-comics-table',
  templateUrl: './comics-table.component.html',
  styleUrls: ['./comics-table.component.scss'],
  animations: [
    FADE_IN_OUT
  ]
})
export class ComicsTableComponent extends EntityTableComponent<IComicsResponse> implements OnInit {

  displayedColumns: string[] = ['thumbnail', 'title', 'description', 'actions'];

  constructor(
    private readonly router: Router,
    private readonly comicFacade: ComicsFacade
  ) {
    super();
  }

  // tslint:disable-next-line: completed-docs
  ngOnInit(): void {
  }

  /**
   * Navigates to comic detail view
   * @param comic Clicked story
   */
  navigate(comic: IComicsResponse): void {
    this.comicFacade.cacheComic(comic);
    this.router.navigate(['/', `${MARVEL_BASE_ROUTE}`, `${COMICS_ROUTE}`, comic.id]);
  }

}
