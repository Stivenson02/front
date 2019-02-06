import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PluginTarjetasComponent } from './plugin-tarjetas.component';

describe('AddressComponent', () => {
  let component: PluginTarjetasComponent;
  let fixture: ComponentFixture<PluginTarjetasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PluginTarjetasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PluginTarjetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
