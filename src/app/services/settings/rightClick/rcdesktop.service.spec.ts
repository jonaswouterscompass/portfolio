import { TestBed } from '@angular/core/testing';

import { RCDesktopService } from './rcdesktop.service';

describe('RCDesktopService', () => {
  let service: RCDesktopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RCDesktopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
