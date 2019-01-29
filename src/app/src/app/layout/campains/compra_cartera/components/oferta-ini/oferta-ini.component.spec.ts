import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertaIniComponent } from './oferta-ini.component';

describe('OfertaIniComponent', () => {
  let component: OfertaIniComponent;
  let fixture: ComponentFixture<OfertaIniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfertaIniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfertaIniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
