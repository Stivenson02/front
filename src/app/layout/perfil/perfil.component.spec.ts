import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PerfilComponent } from './perfil.component';
import {PerfilModule} from "./perfil.module";


describe('PerfilComponent', () => {
  let component: PerfilComponent;
  let fixture: ComponentFixture<PerfilComponent>;

  beforeEach(
      async(() => {
        TestBed.configureTestingModule({
          imports: [
            PerfilModule,
            RouterTestingModule,
            BrowserAnimationsModule,
          ],
        }).compileComponents();
      })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
