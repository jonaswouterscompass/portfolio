import { TestBed } from '@angular/core/testing';

import { LcIsOpenService } from './lc-is-open.service';

describe('LcIsOpenService', () => {
  let service: LcIsOpenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LcIsOpenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
