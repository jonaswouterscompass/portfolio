import { TestBed } from '@angular/core/testing';

import { ExplorerSizeService } from './explorer-size.service';

describe('ExplorerSizeService', () => {
  let service: ExplorerSizeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExplorerSizeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
