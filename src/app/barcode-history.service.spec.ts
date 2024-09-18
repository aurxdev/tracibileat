import { TestBed } from '@angular/core/testing';

import { BarcodeHistoryService } from './barcode-history.service';

describe('BarcodeHistoryService', () => {
  let service: BarcodeHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BarcodeHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
