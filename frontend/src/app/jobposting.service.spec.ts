import { TestBed } from '@angular/core/testing';

import { JobpostingService } from './jobposting.service';

describe('JobpostingService', () => {
  let service: JobpostingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobpostingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
