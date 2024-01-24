import { TestBed } from '@angular/core/testing';

import { SettingSettingsService } from './setting-settings.service';

describe('SettingSettingsService', () => {
  let service: SettingSettingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SettingSettingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
