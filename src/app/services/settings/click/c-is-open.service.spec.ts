import { TestBed } from '@angular/core/testing';

import { CIsOpenService } from './c-is-open.service';

describe('CIsOpenService', () => {
  let service: CIsOpenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CIsOpenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
