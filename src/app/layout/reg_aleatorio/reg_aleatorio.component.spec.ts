import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Reg_AleatorioComponent } from './reg_aleatorio.component';
import { Reg_AleatorioModule } from './reg_aleatorio.module';

describe('Reg_AleatorioComponent', () => {
  let component: Reg_AleatorioComponent;
  let fixture: ComponentFixture<Reg_AleatorioComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [
          Reg_AleatorioModule,
          RouterTestingModule,
          BrowserAnimationsModule,
        ],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(Reg_AleatorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
