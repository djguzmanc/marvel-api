import { Component, OnInit } from '@angular/core';
import { IStoriesResponse } from '@utils/interfaces/response';
import { FADE_IN_OUT } from '@utils/animations';
import { EntityTableComponent } from '../entity-table/entity-table.component';

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

  // tslint:disable-next-line: completed-docs
  ngOnInit(): void { }

  /**
   * Navigates to story detail view
   * @param story Clicked story
   */
  navigate(story: IStoriesResponse): void {

  }

}
