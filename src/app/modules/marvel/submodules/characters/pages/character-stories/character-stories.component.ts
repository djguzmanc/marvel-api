import { Component, OnInit } from '@angular/core';
import { IStoriesResponse } from '@utils/interfaces/response';
import { Observable } from 'rxjs';
import { IFacadeApiMap, IMarvelCollection } from '@utils/interfaces/auxiliary';
import { CharactersFacade } from '@domain/application/facade';
import { ActivatedRoute } from '@angular/router';
import { CHARACTERS_DETAIL } from '@utils/constants';
import { tap } from 'rxjs/operators';
import { FADE_IN_OUT } from '@utils/animations';
import { EntityList } from '@utils/classes';

/**
 * `Smart component` for displaying character's
 * stories
 */
@Component({
  templateUrl: './character-stories.component.html',
  styleUrls: ['./character-stories.component.scss'],
  animations: [
    FADE_IN_OUT
  ]
})
export class CharacterStoriesComponent extends EntityList implements OnInit {

  stories$!: Observable<IFacadeApiMap<IMarvelCollection<IStoriesResponse>>>;

  constructor(
    private readonly charactersFacade: CharactersFacade,
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
    const id = this.route.parent?.snapshot.params[CHARACTERS_DETAIL];
    if (id) {
      this.stories$ = this.charactersFacade.getStoriesByCharacter(id, {
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
