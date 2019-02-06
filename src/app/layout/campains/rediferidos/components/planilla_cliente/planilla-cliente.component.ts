import { Component, OnInit} from '@angular/core';

@Component ({
  selector: 'app-planilla-cliente',
  templateUrl: './planilla-cliente.component.html',
  styleUrls: ['./planilla-cliente.component.scss'],
})
export class PlanillaClienteComponent implements OnInit {

  public acuerdo: number;

  constructor() { }
  ngOnInit() {
    this.acuerdo = 0;
  }
}
