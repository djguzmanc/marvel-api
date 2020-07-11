import { TestBed } from '@angular/core/testing';
import { CharactersApiService } from './characters-api.service';

describe('CharactersApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CharactersApiService = TestBed.inject(CharactersApiService);
    expect(service).toBeTruthy();
  });
});
