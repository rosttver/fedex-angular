import { TestBed } from '@angular/core/testing';

import { CraiglistApiService } from './craiglist-api.service';

describe('CraiglistApiService', () => {
  let service: CraiglistApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CraiglistApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
