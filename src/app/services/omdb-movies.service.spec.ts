import { TestBed } from '@angular/core/testing';

import { OmdbMoviesService } from './omdb-movies.service';

describe('OmdbMoviesService', () => {
  let service: OmdbMoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OmdbMoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
