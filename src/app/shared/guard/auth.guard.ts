import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private cookie: CookieService
  ) {}

  canActivate() {
    if (localStorage.getItem('SF-Token')) {
      return true;
    }else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
