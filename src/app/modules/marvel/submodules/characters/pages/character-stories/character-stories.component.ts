import { Component, OnInit } from '@angular/core';
import { IStoriesResponse } from '@utils/interfaces/response';
import { Observable } from 'rxjs';
import { IFacadeApiMap, IMarvelCollection } from '@utils/interfaces/auxiliary';
import { CharactersFacade } from '@domain/application/facade';
import { ActivatedRoute } from '@angular/router';
import { CHARACTERS_DETAIL } from '@utils/constants';
import { tap } from 'rxjs/operators';
import { PageEvent } from '@angular/material/paginator';
import { FADE_IN_OUT } from '@utils/animations';

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
export class CharacterStoriesComponent implements OnInit {

  totalItems!: number;
  pageSize: number = 20;
  pageSizeOptions = [10, 20, 40, 80, 100];
  currentPage: number = 0;

  stories$!: Observable<IFacadeApiMap<IMarvelCollection<IStoriesResponse>>>;

  displayedColumns: string[] = ['type', 'title', 'description'];

  constructor(
    private readonly charactersFacade: CharactersFacade,
    private readonly route: ActivatedRoute
  ) { }

  // tslint:disable-next-line: completed-docs
  ngOnInit(): void {
    this.initializeComics();
  }

  /**
   * Initializes comics data
   */
  initializeComics(): void {
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

  /**
   * Handles a new page event
   * @param page Page event
   */
  onNewPage(page: PageEvent): void {
    this.currentPage = page.pageIndex;
    this.pageSize = page.pageSize;
    this.initializeComics();
  }

}
