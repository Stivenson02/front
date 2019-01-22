import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriptComponent } from './prescript.component';

describe('AddressComponent', () => {
  let component: PrescriptComponent;
  let fixture: ComponentFixture<PrescriptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrescriptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrescriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
