import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguionComponent } from './preguion.component';

describe('AddressComponent', () => {
  let component: PreguionComponent;
  let fixture: ComponentFixture<PreguionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreguionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreguionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
