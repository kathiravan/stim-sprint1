import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OriginContactInfoComponent } from './origin-contact-info.component';

describe('OriginContactInfoComponent', () => {
  let component: OriginContactInfoComponent;
  let fixture: ComponentFixture<OriginContactInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OriginContactInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OriginContactInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
