import { TestBed } from '@angular/core/testing';
import { BookmarksFacade } from './bookmarks.facade';

describe('BookmarksFacade', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookmarksFacade = TestBed.inject(BookmarksFacade);
    expect(service).toBeTruthy();
  });
});
