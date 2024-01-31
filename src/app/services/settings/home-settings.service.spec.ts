import { TestBed } from '@angular/core/testing';

import { HomeSettingsService } from './home-settings.service';

describe('HomeSettingsService', () => {
  let service: HomeSettingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeSettingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
