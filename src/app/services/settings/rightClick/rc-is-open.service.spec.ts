import { TestBed } from '@angular/core/testing';

import { RcIsOpenService } from './rc-is-open.service';

describe('RcIsOpenService', () => {
  let service: RcIsOpenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RcIsOpenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
