import { Component, OnInit } from '@angular/core';
import { COMICS_DETAIL } from '@utils/constants';
import { IStoriesResponse } from '@utils/interfaces/response';
import { ComicsFacade } from '@domain/application/facade';
import { ActivatedRoute } from '@angular/router';
import { EntityList } from '@utils/classes';

/**
 * Smart component for displaying the comic
 * stories
 */
@Component({
  templateUrl: './comic-stories.component.html',
  styleUrls: ['./comic-stories.component.scss']
})
export class ComicStoriesComponent extends EntityList<IStoriesResponse> implements OnInit {

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
        bind: this.comicsFacade.getStoriesByComic.bind(this.comicsFacade, id)
      });
    }
  }
}
