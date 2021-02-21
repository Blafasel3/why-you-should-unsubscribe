import { TestBed } from '@angular/core/testing';

import { MarketValueService } from './market-value.service';

describe('MarketValueServiceService', () => {
  let service: MarketValueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarketValueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
