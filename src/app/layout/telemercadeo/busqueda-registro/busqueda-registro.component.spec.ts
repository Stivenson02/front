import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BusquedaRegistroComponent } from './busqueda-registro.component';
import { BusquedaRegistroModule } from './busqueda-registro.module';

describe('BusquedaRegistroComponent', () => {
  let component: BusquedaRegistroComponent;
  let fixture: ComponentFixture<BusquedaRegistroComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [
          BusquedaRegistroModule,
          RouterTestingModule,
          BrowserAnimationsModule,
        ],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(BusquedaRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
