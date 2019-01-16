import { Component, OnInit } from '@angular/core';

import { routerTransition } from '../../../router.animations';

@Component({
  selector: 'app-add-user-data',
  templateUrl: './add-user-data.component.html',
  styleUrls: ['./add-user-data.component.scss'],
  animations: [routerTransition()]
})
export class AddUserDataComponent implements OnInit {
  panelOpenState = false;

  constructor() {}

  ngOnInit() {}


}
