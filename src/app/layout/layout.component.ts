import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
    sidebar: boolean;
    collapedSideBar: boolean;

    constructor(
     public router: Router
    ) {}

    ngOnInit() {
      var url =  this.router.url.split('workspace');
      if (url.length <= 1){
        this.sidebar = true;
      } else {
        this.sidebar = false;
      }
    }

    receiveCollapsed($event) {
        this.collapedSideBar = $event;
    }
}
