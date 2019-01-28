import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Guion1Component } from './guion-1.component';

describe('AddressComponent', () => {
  let component: Guion1Component;
  let fixture: ComponentFixture<Guion1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Guion1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Guion1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
