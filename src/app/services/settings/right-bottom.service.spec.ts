import { TestBed } from '@angular/core/testing';

import { RightBottomService } from './right-bottom.service';

describe('RightBottomService', () => {
  let service: RightBottomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RightBottomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
