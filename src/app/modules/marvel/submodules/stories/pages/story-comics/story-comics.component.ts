import { Component, OnInit } from '@angular/core';
import { EntityList } from '@utils/classes';
import { IComicsResponse } from '@utils/interfaces/response';
import { StoriesFacade } from '@domain/application/facade';
import { ActivatedRoute } from '@angular/router';
import { STORIES_DETAIL } from '@utils/constants';

/**
 * Smart component for displaying the
 * comics by story
 */
@Component({
  templateUrl: './story-comics.component.html',
  styleUrls: ['./story-comics.component.scss']
})
export class StoryComicsComponent extends EntityList<IComicsResponse> implements OnInit {

  constructor(
    private readonly storiesFacade: StoriesFacade,
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
    const id = this.route.parent?.snapshot.params[STORIES_DETAIL];
    if (id) {
      this.standardInit({
        bind: this.storiesFacade.getComicsByStory.bind(this.storiesFacade, id)
      });
    }
  }
}
