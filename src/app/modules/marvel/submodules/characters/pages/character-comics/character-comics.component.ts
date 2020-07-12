import { Component, OnInit } from '@angular/core';
import { CharactersFacade } from '@domain/application/facade';
import { ActivatedRoute } from '@angular/router';
import { CHARACTERS_DETAIL } from '@utils/constants';
import { IComicsResponse } from '@utils/interfaces/response';
import { FADE_IN_OUT } from '@utils/animations';
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
export class CharacterComicsComponent extends EntityList<IComicsResponse> implements OnInit {

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
      this.standardInit({
        bind: this.charactersFacade.getComicsByCharacter.bind(this.charactersFacade, id)
      });
    }
  }
}
