import {Component, OnInit} from '@angular/core';

import { routerTransition } from '../../../router.animations';

@Component({
  selector: 'app-add-user-data',
  templateUrl: './rediferidos.component.html',
  styleUrls: ['./rediferidos.component.scss'],
  animations: [routerTransition()]
})
export class RediferidosComponent implements OnInit {

  constructor() {

  }
  ngOnInit() {
  }

}


