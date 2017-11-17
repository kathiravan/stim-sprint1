import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountDestinationDetailComponent } from './account-destination-detail.component';

describe('AccountDestinationDetailComponent', () => {
  let component: AccountDestinationDetailComponent;
  let fixture: ComponentFixture<AccountDestinationDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountDestinationDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountDestinationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
