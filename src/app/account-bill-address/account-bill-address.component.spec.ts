import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountBillAddressComponent } from './account-bill-address.component';

describe('AccountBillAddressComponent', () => {
  let component: AccountBillAddressComponent;
  let fixture: ComponentFixture<AccountBillAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountBillAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountBillAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
