import { PageEvent } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { IFacadeApiMap, IMarvelCollection, IPaginationOptions } from '@utils/interfaces/auxiliary';
import { tap } from 'rxjs/operators';

/**
 * Represents a common list component
 * behavior
 */
export abstract class EntityList<T> {

  collection$!: Observable<IFacadeApiMap<IMarvelCollection<T>>>;

  totalItems!: number;
  pageSize: number = 20;
  pageSizeOptions = [10, 20, 40, 80, 100];
  currentPage: number = 0;

  /**
   * Initializes entity stuff
   * @param reset Tells if the pagination
   * must be reset
   */
  abstract initializeEntity(reset: boolean): void;

  /**
   * Handles a new page event
   * @param page Page event
   */
  onNewPage(page: PageEvent): void {
    this.currentPage = page.pageIndex;
    this.pageSize = page.pageSize;
    this.initializeEntity(false);
  }

  /**
   * Initializes a collection observable
   * @param src The collection observable source
   */
  standardInit({ src, bind }: {
    src?: Observable<IFacadeApiMap<IMarvelCollection<T>>>;
    bind?: (options: IPaginationOptions) => Observable<IFacadeApiMap<IMarvelCollection<T>>>;
  } = {}): void {
    let obs$;

    if (bind) {
      obs$ = bind({
        limit: this.pageSize,
        offset: this.pageSize * this.currentPage,
      });
    } else if (src) {
      obs$ = src.pipe(
        tap(res => {
          if (res.payload) {
            this.totalItems = res.payload.total;
          }
        })
      );
    }

    if (obs$) {
      this.collection$ = obs$;
    }
  }
}
