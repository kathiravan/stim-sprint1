import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationContactInfoComponent } from './destination-contact-info.component';

describe('DestinationContactInfoComponent', () => {
  let component: DestinationContactInfoComponent;
  let fixture: ComponentFixture<DestinationContactInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestinationContactInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinationContactInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
