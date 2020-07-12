import { TestBed } from '@angular/core/testing';

import { MasterApiService } from './master-api.service';

describe('MasterApiService', () => {
  let service: MasterApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MasterApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
