import { TestBed } from '@angular/core/testing';
import { StoriesFacade } from './stories.facade';

describe('StoriesFacade', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StoriesFacade = TestBed.inject(StoriesFacade);
    expect(service).toBeTruthy();
  });
});
