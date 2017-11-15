import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractTemplateInfoComponent } from './contract-template-info.component';

describe('ContractTemplateInfoComponent', () => {
  let component: ContractTemplateInfoComponent;
  let fixture: ComponentFixture<ContractTemplateInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractTemplateInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractTemplateInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
