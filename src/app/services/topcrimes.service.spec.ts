import { TestBed, inject } from '@angular/core/testing';

import { TopcrimesService } from './topcrimes.service';

describe('TopcrimesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TopcrimesService]
    });
  });

  it('should be created', inject([TopcrimesService], (service: TopcrimesService) => {
    expect(service).toBeTruthy();
  }));
});
