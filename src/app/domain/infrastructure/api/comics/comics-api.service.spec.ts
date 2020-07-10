import { TestBed } from '@angular/core/testing';
import { ComicsApiService } from './comics-api.service';

describe('ComicsApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComicsApiService = TestBed.inject(ComicsApiService);
    expect(service).toBeTruthy();
  });
});
