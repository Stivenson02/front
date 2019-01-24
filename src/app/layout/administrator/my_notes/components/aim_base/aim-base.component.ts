import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-aim-base',
    templateUrl: './aim-base.component.html',
    styleUrls: ['./aim-base.component.scss']
})
export class AimBaseComponent implements OnInit {

  data: any;

  constructor() {
    this.data = {
      datasets: [{
        data: [
          11,
          16,
        ],
        backgroundColor: [
          "#4BC0C0",
          "#36A2EB"
        ],
        label: 'My dataset'
      }],
      labels: [
        "Green",
        "Blue"
      ]
    }
  }
    ngOnInit() { }
}
