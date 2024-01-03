import { TestBed } from '@angular/core/testing';

import { ExplorerSettingsService } from './explorer-settings.service';

describe('ExplorerSettingsService', () => {
  let service: ExplorerSettingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExplorerSettingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
