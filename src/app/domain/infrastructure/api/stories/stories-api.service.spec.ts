import { TestBed } from '@angular/core/testing';
import { StoriesApiService } from './stories-api.service';

describe('StoriesApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StoriesApiService = TestBed.inject(StoriesApiService);
    expect(service).toBeTruthy();
  });
});
