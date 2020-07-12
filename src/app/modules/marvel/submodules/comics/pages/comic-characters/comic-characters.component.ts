import { Component, OnInit } from '@angular/core';
import { ICharactersResponse } from '@utils/interfaces/response';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IFacadeApiMap, IMarvelCollection } from '@utils/interfaces/auxiliary';
import { ComicsFacade } from '@domain/application/facade';
import { COMICS_DETAIL } from '@utils/constants';
import { tap } from 'rxjs/operators';
import { EntityList } from '@utils/classes';

/**
 * `Smart component` for displaying characters
 * by comic
 */
@Component({
  templateUrl: './comic-characters.component.html',
  styleUrls: ['./comic-characters.component.scss']
})
export class ComicCharactersComponent extends EntityList implements OnInit {

  characters$!: Observable<IFacadeApiMap<IMarvelCollection<ICharactersResponse>>>;

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
      this.characters$ = this.comicsFacade.getCharactersByComic(id, {
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
