import { PageEvent } from '@angular/material/paginator';

/**
 * Represents a common list component
 * behavior
 */
export abstract class EntityList {
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
}
