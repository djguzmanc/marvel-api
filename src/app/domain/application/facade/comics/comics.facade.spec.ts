import { TestBed } from '@angular/core/testing';
import { ComicsFacade } from './comics.facade';

describe('ComicsFacade', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComicsFacade = TestBed.inject(ComicsFacade);
    expect(service).toBeTruthy();
  });
});
