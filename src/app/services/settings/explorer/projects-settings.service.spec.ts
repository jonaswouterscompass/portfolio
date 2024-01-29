import { TestBed } from '@angular/core/testing';

import { ProjectsSettingsService } from './projects-settings.service';

describe('ProjectsSettingsService', () => {
  let service: ProjectsSettingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectsSettingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
