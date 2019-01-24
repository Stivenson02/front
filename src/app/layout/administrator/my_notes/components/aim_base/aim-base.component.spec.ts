import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AimBaseComponent } from './aim-base.component';

describe('AddressComponent', () => {
  let component: AimBaseComponent;
  let fixture: ComponentFixture<AimBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AimBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AimBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
