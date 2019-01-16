import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { MAINMENU } from '../../../menus/MainMenu';
import { TMKMENU } from '../../../menus/TmkMenu';
import { REPORTESMENU } from '../../../menus/ReportesMenu';
import { BACKOFFICEMENU} from '../../../menus/BackOffMenu';
import { ADMINMENU } from '../../../menus/AdminMenu';
import { AUDITORIAMENU } from '../../../menus/AuditoriaMenu';
import { ABPOMENU } from '../../../menus/A3bpoMenu';
import {AREAWORKMENU} from '../../../menus/AreaWorkMenu';

import { CookieService } from 'ngx-cookie-service';



@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  mainmenu= null;
  tmkmenu= TMKMENU;
  reportesmenu= REPORTESMENU;
  backofficemenu=BACKOFFICEMENU;
  adminmenu=ADMINMENU;
  auditoriamenu=AUDITORIAMENU;
  abpomenu=ABPOMENU;

  isActive: boolean;
  collapsed: boolean;
  showMenu: string;
  pushRightClass: string;

  @Output() collapsedEvent = new EventEmitter<boolean>();

  constructor(private translate: TranslateService, public router: Router, public cookie: CookieService) {
    this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de']);
    this.translate.setDefaultLang('en');
    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de/) ? browserLang : 'en');

    this.router.events.subscribe(val => {
      if (
        val instanceof NavigationEnd &&
        window.innerWidth <= 992 &&
        this.isToggled()
      ) {
        this.toggleSidebar();
      }
    });
  }

  ngOnInit() {

    this.mainmenu = MAINMENU;

    this.isActive = false;
    this.collapsed = true;
    this.showMenu = '';
    this.pushRightClass = 'push-right';
  }

  eventCalled() {
    this.isActive = !this.isActive;
  }

  addExpandClass(element: any) {
    if (element === this.showMenu) {
      this.showMenu = '0';
    } else {
      this.showMenu = element;
    }
  }

  toggleCollapsed() {
    this.collapsed = !this.collapsed;
    this.collapsedEvent.emit(this.collapsed);
  }

  isToggled(): boolean {
    const dom: Element = document.querySelector('body');
    return dom.classList.contains(this.pushRightClass);
  }

  toggleSidebar() {
    const dom: any = document.querySelector('body');
    dom.classList.toggle(this.pushRightClass);
  }

  rltAndLtr() {
    const dom: any = document.querySelector('body');
    dom.classList.toggle('rtl');
  }

  changeLang(language: string) {
    this.translate.use(language);
  }

  onLoggedout() {
    this.cookie.deleteAll();
    localStorage.clear();
    location.reload();
  }
}
