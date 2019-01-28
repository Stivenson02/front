import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RediferidoComponent } from './rediferido.component';

describe('AddressComponent', () => {
  let component: RediferidoComponent;
  let fixture: ComponentFixture<RediferidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RediferidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RediferidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
