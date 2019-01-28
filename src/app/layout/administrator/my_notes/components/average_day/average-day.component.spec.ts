import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AverageDayComponent } from './average-day.component';

describe('AddressComponent', () => {
  let component: AverageDayComponent;
  let fixture: ComponentFixture<AverageDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AverageDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AverageDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
