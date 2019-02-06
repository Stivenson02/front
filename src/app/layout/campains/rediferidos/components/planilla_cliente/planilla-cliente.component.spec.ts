import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanillaClienteComponent } from './planilla-cliente.component';

describe('AddressComponent', () => {
  let component: PlanillaClienteComponent;
  let fixture: ComponentFixture<PlanillaClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanillaClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanillaClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
