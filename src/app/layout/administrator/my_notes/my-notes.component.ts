import { Component, OnInit } from '@angular/core';

import { routerTransition } from '../../../router.animations';

@Component({
  selector: 'app-add-user-data',
  templateUrl: './my-notes.component.html',
  styleUrls: ['./my-notes.component.scss'],
  animations: [routerTransition()]
})
export class MyNotesComponent implements OnInit {
  panelOpenState = false;

  constructor() {}

  ngOnInit() {}


}
