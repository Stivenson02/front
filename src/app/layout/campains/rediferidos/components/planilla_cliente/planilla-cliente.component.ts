import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component ({
  selector: 'app-planilla-cliente',
  templateUrl: './planilla-cliente.component.html',
  styleUrls: ['./planilla-cliente.component.scss'],
})
export class PlanillaClienteComponent implements OnInit {
  public continue_tree: number;

  constructor() { }
  ngOnInit() {
    this.continue_tree = 0;
  }
}
