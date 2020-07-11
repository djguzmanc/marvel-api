import { TestBed } from '@angular/core/testing';
import { CharactersFacade } from './characters.facade';

describe('CharactersFacade', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CharactersFacade = TestBed.inject(CharactersFacade);
    expect(service).toBeTruthy();
  });
});
