import { TestBed } from '@angular/core/testing';

import { CountryTimezoneService } from './country-timezone.service';

describe('CountryTimezoneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CountryTimezoneService = TestBed.get(CountryTimezoneService);
    expect(service).toBeTruthy();
  });
});
