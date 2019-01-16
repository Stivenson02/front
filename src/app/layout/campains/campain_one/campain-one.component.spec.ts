import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CampainOneComponent } from './campain-one.component';
import { CampainOneModule } from './campain-one.module';


describe('AdministratorComponent', () => {
  let component: CampainOneComponent;
  let fixture: ComponentFixture<CampainOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CampainOneModule,
        RouterTestingModule,
        BrowserAnimationsModule,
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampainOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
