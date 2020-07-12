import { Component, OnInit } from '@angular/core';
import { EntityList } from '@utils/classes';
import { ICharactersResponse } from '@utils/interfaces/response';
import { StoriesFacade } from '@domain/application/facade';
import { ActivatedRoute } from '@angular/router';
import { STORIES_DETAIL } from '@utils/constants';

/**
 * `Smart component` for listing the characters
 * by story
 */
@Component({
  templateUrl: './story-characters.component.html',
  styleUrls: ['./story-characters.component.scss']
})
export class StoryCharactersComponent extends EntityList<ICharactersResponse> implements OnInit {

  constructor(
    private readonly storiesFacade: StoriesFacade,
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
    const id = this.route.parent?.snapshot.params[STORIES_DETAIL];
    if (id) {
      this.standardInit({
        bind: this.storiesFacade.getCharactersByStory.bind(this.storiesFacade, id)
      });
    }
  }

}
