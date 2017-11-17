import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountOriginDetailComponent } from './account-origin-detail.component';

describe('AccountOriginDetailComponent', () => {
  let component: AccountOriginDetailComponent;
  let fixture: ComponentFixture<AccountOriginDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountOriginDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountOriginDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
