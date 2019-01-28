import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CompraCarteraComponent } from './compra-cartera.component';
import { CompraCarteraModule } from './compra-cartera.module';


describe('AdministratorComponent', () => {
  let component: CompraCarteraComponent;
  let fixture: ComponentFixture<CompraCarteraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CompraCarteraModule,
        RouterTestingModule,
        BrowserAnimationsModule,
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraCarteraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
