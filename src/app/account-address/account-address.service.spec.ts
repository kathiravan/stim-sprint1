import { TestBed, inject } from '@angular/core/testing';

import { AccountAddressService } from './account-address.service';

describe('AccountAddressService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccountAddressService]
    });
  });

  it('should be created', inject([AccountAddressService], (service: AccountAddressService) => {
    expect(service).toBeTruthy();
  }));
});
