import { Component, OnInit } from '@angular/core';
import { IStoriesResponse } from '@utils/interfaces/response';
import { CharactersFacade } from '@domain/application/facade';
import { ActivatedRoute } from '@angular/router';
import { CHARACTERS_DETAIL } from '@utils/constants';
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
export class CharacterStoriesComponent extends EntityList<IStoriesResponse> implements OnInit {

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
      this.standardInit({
        bind: this.charactersFacade.getStoriesByCharacter.bind(this.charactersFacade, id)
      });
    }
  }
}
