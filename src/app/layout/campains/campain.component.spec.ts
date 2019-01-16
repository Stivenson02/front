import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';

import { CampainComponent } from './campain.component';
import {CampainModule} from './campain.module';


describe('CampainComponent', () => {
  let component: CampainComponent;
  let fixture: ComponentFixture<CampainComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [
          CampainModule,
          RouterTestingModule,
          TranslateModule.forRoot(),
        ]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(CampainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
