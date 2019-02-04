import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextOneComponent } from './text-one.component';

describe('AddressComponent', () => {
  let component: TextOneComponent;
  let fixture: ComponentFixture<TextOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
