import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableFoundRegComponent } from './table-found-reg.component';

describe('AddressComponent', () => {
  let component: TableFoundRegComponent;
  let fixture: ComponentFixture<TableFoundRegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableFoundRegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableFoundRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
