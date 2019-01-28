import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RediferidosComponent } from './rediferidos.component';
import { RediferidosModule } from './rediferidos.module';


describe('AdministratorComponent', () => {
  let component: RediferidosComponent;
  let fixture: ComponentFixture<RediferidosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RediferidosModule,
        RouterTestingModule,
        BrowserAnimationsModule,
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RediferidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
