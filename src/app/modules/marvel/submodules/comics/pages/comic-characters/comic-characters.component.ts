import { Component, OnInit } from '@angular/core';
import { ICharactersResponse } from '@utils/interfaces/response';
import { ActivatedRoute } from '@angular/router';
import { ComicsFacade } from '@domain/application/facade';
import { COMICS_DETAIL } from '@utils/constants';
import { EntityList } from '@utils/classes';

/**
 * `Smart component` for displaying characters
 * by comic
 */
@Component({
  templateUrl: './comic-characters.component.html',
  styleUrls: ['./comic-characters.component.scss']
})
export class ComicCharactersComponent extends EntityList<ICharactersResponse> implements OnInit {

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
      this.standardInit({
        bind: this.comicsFacade.getCharactersByComic.bind(this.comicsFacade, id)
      });
    }
  }
}
