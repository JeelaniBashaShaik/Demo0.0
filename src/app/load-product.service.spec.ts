import { TestBed, inject } from '@angular/core/testing';

import { LoadProductService } from './load-product.service';

describe('LoadProductService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoadProductService]
    });
  });

  it('should ...', inject([LoadProductService], (service: LoadProductService) => {
    expect(service).toBeTruthy();
  }));
});
