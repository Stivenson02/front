import {Component, HostListener, OnInit} from '@angular/core';

import { routerTransition } from '../../../router.animations';

interface ngDoCheck {
  ngDoCheck(): void
}

@Component({
  selector: 'app-add-user-data',
  templateUrl: './campain-one.component.html',
  styleUrls: ['./campain-one.component.scss'],
  animations: [routerTransition()]
})
export class CampainOneComponent implements OnInit, ngDoCheck {

  showScritp: string;
  data: any;
  listen:boolean;
  selectedItemPhone: boolean;
  selectedItemInfo: boolean;
  selectedItemAddress: boolean;
  selectedItemMail: boolean;
  selectedItemHistory: boolean;
  selectedItemCalificate: boolean;

  @HostListener('document:keyup', ['$event'])
  onKeyUp(ev:KeyboardEvent) {
    // do something meaningful with it
    if (ev.key == 'Alt' ){
      this.listen=true;
    }
    if (this.listen){
      if (ev.key == 'p' ){
        this.selectedItemPhone = true;
        this.selectedItemInfo = false;
        this.selectedItemAddress = false;
        this.selectedItemMail = false;
        this.selectedItemHistory = false;
        this.selectedItemCalificate = false;
      }
      if (ev.key == 'i' ){
        this.selectedItemInfo = true;
        this.selectedItemPhone = false;
        this.selectedItemAddress = false;
        this.selectedItemMail = false;
        this.selectedItemHistory = false;
        this.selectedItemCalificate = false;
      }
      if (ev.key == 'a' ){
        this.selectedItemAddress = true;
        this.selectedItemInfo = false;
        this.selectedItemPhone = false;
        this.selectedItemMail = false;
        this.selectedItemHistory = false;
        this.selectedItemCalificate = false;
      }
      if (ev.key == 'm' ){
        this.selectedItemMail = true;
        this.selectedItemInfo = false;
        this.selectedItemPhone = false;
        this.selectedItemAddress = false;
        this.selectedItemHistory = false;
        this.selectedItemCalificate = false;
      }
      if (ev.key == 'h' ){
        this.selectedItemHistory = true;
        this.selectedItemInfo = false;
        this.selectedItemPhone = false;
        this.selectedItemAddress = false;
        this.selectedItemMail = false;
        this.selectedItemCalificate = false;
      }
      if (ev.key == 'c' ){
        this.selectedItemCalificate = true;
        this.selectedItemInfo = false;
        this.selectedItemPhone = false;
        this.selectedItemAddress = false;
        this.selectedItemMail = false;
        this.selectedItemHistory = false;
      }
      if( ev.key != 'Alt'){
        this.listen = false;
      }
    }
  }

  constructor() {
    this.data = {
      labels: ['A','B'],
      datasets: [
        {
          data: [50, 100],
          backgroundColor: [
            "#FF6384",
            "#36A2EB"
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB"
          ]
        }]
    };
  }

  ngDoCheck() {
    this.showScritp = localStorage.getItem('submenu');
  }
  ngOnInit() {
    this.listen = false;
    this.selectedItemInfo = true;
    this.selectedItemPhone = false;
    this.selectedItemAddress = false;
    this.selectedItemMail = false;
    this.selectedItemHistory = false;
    this.selectedItemCalificate = false;

    this.showScritp = localStorage.getItem('submenu');

  }

}


