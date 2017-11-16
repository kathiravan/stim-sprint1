import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountPartnerSummaryComponent } from './account-partner-summary.component';

describe('AccountPartnerSummaryComponent', () => {
  let component: AccountPartnerSummaryComponent;
  let fixture: ComponentFixture<AccountPartnerSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountPartnerSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountPartnerSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
