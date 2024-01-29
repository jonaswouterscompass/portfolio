import { TestBed } from '@angular/core/testing';

import { SocialsSettingsService } from './socials-settings.service';

describe('SocialsSettingsService', () => {
  let service: SocialsSettingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SocialsSettingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
