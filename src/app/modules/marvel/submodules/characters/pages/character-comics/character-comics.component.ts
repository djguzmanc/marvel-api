import { Component, OnInit } from '@angular/core';
import { CharactersFacade } from '@domain/application/facade';
import { ActivatedRoute } from '@angular/router';
import { CHARACTERS_DETAIL } from '@utils/constants';
import { IFacadeApiMap, IMarvelCollection } from '@utils/interfaces/auxiliary';
import { IComicsResponse } from '@utils/interfaces/response';
import { Observable } from 'rxjs';
import { FADE_IN_OUT } from '@utils/animations';
import { tap } from 'rxjs/operators';
import { EntityList } from '@utils/classes';

/**
 * `Smart component` for displaying the comics
 * by character
 */
@Component({
  templateUrl: './character-comics.component.html',
  styleUrls: ['./character-comics.component.scss'],
  animations: [
    FADE_IN_OUT
  ]
})
export class CharacterComicsComponent extends EntityList implements OnInit {

  comics$!: Observable<IFacadeApiMap<IMarvelCollection<IComicsResponse>>>;

  constructor(
    private readonly charactersFacade: CharactersFacade,
    private readonly route: ActivatedRoute
  ) { super(); }

  // tslint:disable-next-line: completed-docs
  ngOnInit(): void {
    this.initializeEntity();
  }

  /**
   * Initializes comics data
   */
  initializeEntity(): void {
    const id = this.route.parent?.snapshot.params[CHARACTERS_DETAIL];
    if (id) {
      this.comics$ = this.charactersFacade.getComicsByCharacter(id, {
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
