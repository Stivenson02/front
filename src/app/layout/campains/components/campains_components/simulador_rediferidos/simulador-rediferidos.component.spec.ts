import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimuladorRediferidosComponent } from './simulador-rediferidos.component';

describe('AddressComponent', () => {
  let component: SimuladorRediferidosComponent;
  let fixture: ComponentFixture<SimuladorRediferidosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimuladorRediferidosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimuladorRediferidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
