import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-simulador',
  templateUrl: './simulador.component.html',
  styleUrls: ['./simulador.component.scss'],
  providers: [ MessageService ]
})
export class SimuladorComponent implements OnInit {

  
  interesDavi: number = 1;
  totalCuotasDavi: number = 3;
  
  interesOtra: number = 6;
  totalCuotasOtra: number = 8;

  totalSaldo: number = 100;

  total: number;
  
  numeroCuotaDavi: number[];
	saldoDavi: number[];
  abonoCapitalDavi: number[];
  abonoInteresDavi: number[];
  pagoMinimoDavi: number[];

  numeroCuotaOtra: number[];
  saldoOtra: number[];
  abonoCapitalOtra: number[];
  abonoInteresOtra: number[];
  pagoMinimoOtra: number[];

  showTableDavi: boolean = false;
  
  constructor() {
    //this.numeroCuotaDavi[0] = 1;
    //this.numeroCuotaDavi[1] = 2;
    //this.saldoDavi[0] = this.totalSaldo;
    //this.abonoCapitalDavi[0] = this.totalSaldo / this.totalCuotasDavi;
    //this.abonoInteresDavi[0] = this.totalSaldo * this.interesDavi;
    //this.pagoMinimoDavi[0] = this.abonoCapitalDavi[0] + this.abonoInteresDavi[0];
  }

  showHiddenTable(){
  	this.showTableDavi = true;
  }

  onInputFunction(){
    
  }

  ngOnInit() {
   
  }
}
