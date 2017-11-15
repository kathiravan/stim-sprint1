import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookerAgentAddressComponent } from './booker-agent-address.component';

describe('BookerAgentAddressComponent', () => {
  let component: BookerAgentAddressComponent;
  let fixture: ComponentFixture<BookerAgentAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookerAgentAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookerAgentAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
