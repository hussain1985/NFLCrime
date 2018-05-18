import { TestBed, inject } from '@angular/core/testing';

import { CrimeTimelineServiceService } from './crime-timeline-service.service';

describe('CrimeTimelineServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrimeTimelineServiceService]
    });
  });

  it('should be created', inject([CrimeTimelineServiceService], (service: CrimeTimelineServiceService) => {
    expect(service).toBeTruthy();
  }));
});
