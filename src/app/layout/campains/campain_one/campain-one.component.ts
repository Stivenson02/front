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
  data: any;

  constructor() {
    this.data = {
      labels: ['Ventas','No Ventas','Perdidas'],
      datasets: [
        {
          data: [300, 80, 100],
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ]
        }]
    };
  }

  ngDoCheck() {
    this.showScritp = localStorage.getItem('submenu');
  }
  ngOnInit() {
    this.showScritp = localStorage.getItem('submenu');
  }


}
