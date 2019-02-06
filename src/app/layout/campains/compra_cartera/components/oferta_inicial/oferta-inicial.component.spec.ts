import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertaInicialComponent } from './oferta-inicial.component';

describe('AddressComponent', () => {
  let component: OfertaInicialComponent;
  let fixture: ComponentFixture<OfertaInicialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfertaInicialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfertaInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
