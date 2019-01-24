import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AverageMonthComponent } from './average-month.component';

describe('AddressComponent', () => {
  let component: AverageMonthComponent;
  let fixture: ComponentFixture<AverageMonthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AverageMonthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AverageMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
