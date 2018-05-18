import { TestBed, inject } from '@angular/core/testing';

import { TopteamsService } from './topteams.service';

describe('TopteamsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TopteamsService]
    });
  });

  it('should be created', inject([TopteamsService], (service: TopteamsService) => {
    expect(service).toBeTruthy();
  }));
});
