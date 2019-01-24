import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-average-day',
    templateUrl: './average-day.component.html',
    styleUrls: ['./average-day.component.scss']
})
export class AverageDayComponent implements OnInit {
  data: any;

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
    ngOnInit() { }
}
