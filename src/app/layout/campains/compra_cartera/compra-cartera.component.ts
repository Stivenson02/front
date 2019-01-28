import { Component, HostListener, OnInit } from '@angular/core';

import { routerTransition } from '../../../router.animations';

@Component({
  selector: 'app-compra-cartera',
  templateUrl: './compra-cartera.component.html',
  styleUrls: ['./compra-cartera.component.scss'],
  animations: [routerTransition()]
})
export class CompraCarteraComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}


