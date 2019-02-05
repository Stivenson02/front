import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextoInicialComponent } from './texto-inicial.component';

describe('AddressComponent', () => {
  let component: TextoInicialComponent;
  let fixture: ComponentFixture<TextoInicialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextoInicialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextoInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
