import { Component, OnInit } from '@angular/core';
import { CharactersFacade } from '@domain/application/facade';
import { Observable } from 'rxjs';
import { IFacadeApiMap, IMarvelCollection, ICharactersOptions } from '@utils/interfaces/auxiliary';
import { ICharactersResponse } from '@utils/interfaces/response';
import { tap } from 'rxjs/operators';
import { PageEvent } from '@angular/material/paginator';
import { FADE_IN_OUT } from '@utils/animations';
import { FormControl, FormGroup } from '@angular/forms';

/**
 * `Smart component` for characters rendering
 */
@Component({
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
  animations: [
    FADE_IN_OUT
  ]
})
export class CharactersComponent implements OnInit {

  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  totalItems!: number;
  pageSize: number = 20;
  pageSizeOptions = [10, 20, 40, 80, 100];
  currentPage: number = 0;

  characters$!: Observable<IFacadeApiMap<IMarvelCollection<ICharactersResponse>>>;

  displayedColumns: string[] = ['thumbnail', 'name', 'description', 'actions'];

  filterForm = new FormGroup({
    name: new FormControl(),
    comics: new FormControl(),
    stories: new FormControl(),
    nameSort: new FormControl(true)
  });

  currentFilters: Partial<ICharactersOptions> = {};

  constructor(
    private readonly charactersFacade: CharactersFacade
  ) { }

  // tslint:disable-next-line: completed-docs
  ngOnInit(): void {
    this.initializeCharacters();
  }

  /**
   * Sets the characters observable value
   * @param resetPage If set to true reset the
   * page index to 0
   */
  initializeCharacters(resetPage: boolean = false): void {
    if (resetPage) {
      this.currentPage = 0;
    }

    this.characters$ = this.charactersFacade.getAll({
      limit: this.pageSize,
      offset: this.pageSize * this.currentPage,
      ...this.currentFilters
    }).pipe(
      tap(res => {
        if (res.payload) {
          this.totalItems = res.payload.total;
        }
      })
    );
  }

  /**
   * Clear all the filters and
   * reset the query
   */
  clearFilters(): void {
    this.filterForm.reset();
    this.filterForm.get('nameSort')?.setValue(true);
    this.applyFilters(this.filterForm);
  }

  /**
   * Apply filters the original characters query
   */
  applyFilters(form: FormGroup): void {
    const formValue = form.value;
    this.currentFilters = {
      comics: formValue.comics,
      nameStartsWith: formValue.name,
      stories: formValue.stories,
      orderBy: formValue.nameSort ? 'name' : '-name',
    };
    this.initializeCharacters(true);
  }

  /**
   * Handles a new page event
   * @param page Page event
   */
  onNewPage(page: PageEvent): void {
    this.currentPage = page.pageIndex;
    this.pageSize = page.pageSize;
    this.initializeCharacters();
  }

}
