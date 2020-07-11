import { Component, OnInit } from '@angular/core';
import { CharactersFacade, ComicsFacade, StoriesFacade } from '@domain/application/facade';
import { Observable } from 'rxjs';
import { IFacadeApiMap, IMarvelCollection, ICharactersOptions, IComicFilter } from '@utils/interfaces/auxiliary';
import { ICharactersResponse } from '@utils/interfaces/response';
import { tap, switchMap, filter, debounceTime } from 'rxjs/operators';
import { PageEvent } from '@angular/material/paginator';
import { FADE_IN_OUT } from '@utils/animations';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

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

  totalItems!: number;
  pageSize: number = 20;
  pageSizeOptions = [10, 20, 40, 80, 100];
  currentPage: number = 0;

  characters$!: Observable<IFacadeApiMap<IMarvelCollection<ICharactersResponse>>>;
  comics$!: Observable<IFacadeApiMap<IMarvelCollection<IComicFilter>>>;

  displayedColumns: string[] = ['thumbnail', 'name', 'description', 'actions'];

  comicFilter = new FormControl();

  filterForm = new FormGroup({
    name: new FormControl(),
    comics: new FormControl(),
    stories: new FormControl(),
    nameSort: new FormControl(true)
  });

  currentFilters: Partial<ICharactersOptions> = {};

  constructor(
    private readonly charactersFacade: CharactersFacade,
    private readonly comicsFacade: ComicsFacade,
    private readonly storiesFacade: StoriesFacade,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
  ) { }

  // tslint:disable-next-line: completed-docs
  ngOnInit(): void {
    this.initializeCharacters();
    this.getNextComics();
    this.storiesFacade.getAll({}).subscribe();
  }

  /**
   * Fetches the next comics page
   */
  getNextComics(): void {
    this.comics$ = this.comicFilter.valueChanges.pipe(
      debounceTime(300),
      filter(val => val),
      switchMap(val => this.comicsFacade.getAllForFiltering({
        titleStartsWith: val
      }))
    );
  }

  /**
   * Handles a comic selection
   * @param comic The comic selected
   */
  onComicSelect(comic: IComicFilter): void {
    this.comicFilter.setValue(null);
    const control = this.filterForm.get('comics');
    if (control) {
      const value = (control.value as (IComicFilter[] | null));
      if (value) {
        if (!value.find(item => item.value === comic.value)) {
          control.setValue(value.concat(comic));
        }
      } else {
        control.setValue([comic]);
      }
      this.filterForm.markAsDirty();
    }
  }

  /**
   * Deletes a comic from the filtering list
   */
  onComicChipClick(comic: IComicFilter): void {
    const control = this.filterForm.get('comics');
    if (control) {
      const value = (control.value as (IComicFilter[]));
      const index = value.findIndex(item => item.value === comic.value);
      value.splice(index, 1);
    }
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
      comics: ((formValue.comics || []) as (IComicFilter[]))
        .map(comic => comic.value).join(','),
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

  /**
   * Navigate to the character detail view
   * @param character The character
   */
  navigateToCharacter(character: ICharactersResponse): void {
    this.charactersFacade.cacheCharacter(character);
    this.router.navigate([`../${character.id}`], { relativeTo: this.route });
  }

}