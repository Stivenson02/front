import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryTmkComponent } from './history-tmk.component';

describe('AddressComponent', () => {
  let component: HistoryTmkComponent;
  let fixture: ComponentFixture<HistoryTmkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryTmkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryTmkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
