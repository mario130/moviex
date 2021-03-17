import { TestBed } from '@angular/core/testing';

import { MoviesPagenationServiceService } from './movies-pagenation-service.service';

describe('MoviesPagenationServiceService', () => {
  let service: MoviesPagenationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviesPagenationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
