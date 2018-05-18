import { TestBed, inject } from '@angular/core/testing';

import { TopplayersService } from './topplayers.service';

describe('TopplayersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TopplayersService]
    });
  });

  it('should be created', inject([TopplayersService], (service: TopplayersService) => {
    expect(service).toBeTruthy();
  }));
});
