import { TestBed } from '@angular/core/testing';

import { RCFooterService } from './rcfooter.service';

describe('RCFooterService', () => {
  let service: RCFooterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RCFooterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
