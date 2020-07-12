import { Component, OnInit } from '@angular/core';
import { IStoriesResponse } from '@utils/interfaces/response';
import { FADE_IN_OUT } from '@utils/animations';
import { EntityTableComponent } from '../entity-table/entity-table.component';
import { Router } from '@angular/router';
import { StoriesFacade } from '@domain/application/facade';
import { MARVEL_BASE_ROUTE, STORIES_ROUTE } from '@utils/constants';

/**
 * `Dumb component` for displaying a stories
 * table
 */
@Component({
  selector: 'ma-stories-table',
  templateUrl: './stories-table.component.html',
  styleUrls: ['./stories-table.component.scss'],
  animations: [
    FADE_IN_OUT
  ]
})
export class StoriesTableComponent extends EntityTableComponent<IStoriesResponse> implements OnInit {

  displayedColumns: string[] = ['type', 'title', 'description', 'actions'];

  constructor(
    private readonly router: Router,
    private readonly storiesFacade: StoriesFacade
  ) {
    super();
  }

  // tslint:disable-next-line: completed-docs
  ngOnInit(): void { }

  /**
   * Navigates to story detail view
   * @param story Clicked story
   */
  navigate(story: IStoriesResponse): void {
    this.storiesFacade.cacheStory(story);
    this.router.navigate(['/', `${MARVEL_BASE_ROUTE}`, `${STORIES_ROUTE}`, story.id]);
  }

}
