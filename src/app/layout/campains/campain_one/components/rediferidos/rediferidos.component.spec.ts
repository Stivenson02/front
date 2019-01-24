import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RediferidosComponent } from './rediferidos.component';

describe('AddressComponent', () => {
  let component: RediferidosComponent;
  let fixture: ComponentFixture<RediferidosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RediferidosComponent ]
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
