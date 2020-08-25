import { TestBed } from '@angular/core/testing';

import { CountryhttpService } from './countryhttp.service';

describe('CountryhttpService', () => {
  let service: CountryhttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountryhttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
