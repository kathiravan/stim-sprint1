import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountAddPartnerInfoComponent } from './account-add-partner-info.component';

describe('AccountAddPartnerInfoComponent', () => {
  let component: AccountAddPartnerInfoComponent;
  let fixture: ComponentFixture<AccountAddPartnerInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountAddPartnerInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountAddPartnerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
