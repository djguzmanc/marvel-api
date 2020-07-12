import { Component, OnInit } from '@angular/core';
import { ComicsFacade } from '@domain/application/facade';
import { IComicsResponse } from '@utils/interfaces/response';
import { IComicsOptions } from '@utils/interfaces/auxiliary';
import { FormGroup, FormControl } from '@angular/forms';
import { FADE_IN_OUT } from '@utils/animations';
import { EntityList } from '@utils/classes';

/**
 * `Smart component` for displaying all comics
 * with filters
 */
@Component({
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss'],
  animations: [
    FADE_IN_OUT
  ]
})
export class ComicsComponent extends EntityList<IComicsResponse> implements OnInit {

  formatOptions: Array<IComicsOptions['format']> = [
    'comic',
    'digest',
    'digital comic',
    'graphic novel',
    'hardcover',
    'infinite comic',
    'magazine',
    'trade paperback'
  ];

  filterForm = new FormGroup({
    format: new FormControl(),
    title: new FormControl(),
    issueNumber: new FormControl(),
    issueSort: new FormControl(false)
  });

  currentFilters: Partial<IComicsOptions> = {};

  constructor(
    private readonly comicsFacade: ComicsFacade,
  ) { super(); }

  // 15130558
  // tslint:disable-next-line: completed-docs
  ngOnInit(): void {
    this.initializeEntity();
  }

  /**
   * Sets the comics observable value
   * @param resetPage If set to true reset the
   * page index to 0
   */
  initializeEntity(resetPage: boolean = false): void {
    if (resetPage) {
      this.currentPage = 0;
    }

    this.standardInit({
      src: this.comicsFacade.getAll({
        limit: this.pageSize,
        offset: this.pageSize * this.currentPage,
        ...this.currentFilters
      })
    });
  }

  /**
   * Clear all the filters and
   * reset the query
   */
  clearFilters(): void {
    this.filterForm.reset();
    this.applyFilters(this.filterForm);
  }

  /**
   * Apply filters the original comics query
   */
  applyFilters(form: FormGroup): void {
    const formValue = form.value;
    this.currentFilters = {
      titleStartsWith: formValue.title,
      format: formValue.format,
      orderBy: formValue.issueSort ? 'issueNumber' : null,
      issueNumber: formValue.issueNumber
    };
    this.initializeEntity(true);
  }
}
