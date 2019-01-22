import { Component, OnInit, ViewChild } from '@angular/core';

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

  constructor() {}

  ngDoCheck() {
    this.showScritp = localStorage.getItem('submenu');
  }
  ngOnInit() {
    this.showScritp = localStorage.getItem('submenu');
  }


}
