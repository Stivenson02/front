import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextoValidacionComponent } from './texto-validacion.component';

describe('AddressComponent', () => {
  let component: TextoValidacionComponent;
  let fixture: ComponentFixture<TextoValidacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextoValidacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent( TextoValidacionComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
