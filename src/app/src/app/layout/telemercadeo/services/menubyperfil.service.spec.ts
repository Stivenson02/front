import { TestBed } from '@angular/core/testing';

import { MenubyperfilService } from './menubyperfil.service';

describe('MenubyperfilService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MenubyperfilService = TestBed.get(MenubyperfilService);
    expect(service).toBeTruthy();
  });
});
