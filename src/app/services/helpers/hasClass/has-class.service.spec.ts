import { TestBed } from '@angular/core/testing';

import { HasClassService } from './has-class.service';

describe('HasClassService', () => {
  let service: HasClassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HasClassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
