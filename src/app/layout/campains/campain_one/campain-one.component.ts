import { Component, OnInit } from '@angular/core';

import { routerTransition } from '../../../router.animations';

@Component({
  selector: 'app-add-user-data',
  templateUrl: './campain-one.component.html',
  styleUrls: ['./campain-one.component.scss'],
  animations: [routerTransition()]
})
export class CampainOneComponent implements OnInit {
  panelOpenState = false;

  constructor() {}

  ngOnInit() {}


}
