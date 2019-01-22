import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './campain.component.html',
  styleUrls: ['./campain.component.scss']
})
export class CampainComponent implements OnInit {

  collapedSideBar: boolean;

  constructor() {}

  ngOnInit() {
    localStorage.setItem('submenu', 'false');
  }

  receiveCollapsed($event) {
    this.collapedSideBar = $event;
  }
}
