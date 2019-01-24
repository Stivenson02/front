import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { MAINMENU } from '../../../menus/MainMenu';
import { TMKMENU } from '../../../menus/TmkMenu';
import { REPORTESMENU } from '../../../menus/ReportesMenu';
import { BACKOFFICEMENU } from '../../../menus/BackOffMenu';
import { ADMINMENU } from '../../../menus/AdminMenu';
import { AUDITORIAMENU } from '../../../menus/AuditoriaMenu';
import { ABPOMENU } from '../../../menus/A3bpoMenu';
import { AREAWORKMENU } from '../../../menus/AreaWorkMenu';
import { MENUPORPERFIL } from '../../../menus/MenuPorPerfil';

import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  //arreglo con la asignacion de menu por perfil
  menuporperfil = MENUPORPERFIL;
  
  mainmenu= MAINMENU;
  tmkmenu= TMKMENU;
  reportesmenu= REPORTESMENU;
  backofficemenu=BACKOFFICEMENU;
  adminmenu=ADMINMENU;
  auditoriamenu=AUDITORIAMENU;
  abpomenu=ABPOMENU;
  
  rol: number = 2;

  isActive: boolean;
  collapsed: boolean;
  showMenu: string;
  pushRightClass: string;

  constructor(public router: Router, public cookie: CookieService) {
    
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

  onLoggedout() {
    this.cookie.deleteAll();
    localStorage.clear();
    location.reload();
  }
}
