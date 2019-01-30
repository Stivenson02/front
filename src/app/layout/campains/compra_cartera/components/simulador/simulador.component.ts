import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-simulador',
  templateUrl: './simulador.component.html',
  styleUrls: ['./simulador.component.scss'],
  providers: [ MessageService ]
})
export class SimuladorComponent implements OnInit {

  //variables de entrada (Simulador compra cartera)

  interesDavi: number = 1;
  cantidadCuotasDavi: number = 3;
  
  interesOtra: number = 6;
  cantidadCuotasOtra: number = 8;

  totalSaldo: number = 100;
  tasaDavi: number; 

  //Variables-arreglos para mostrar en las tablas de amortización 

  numeroCuotaDavi = [];
  saldoDavi = [];
  abonoCapitalDavi: number;
  abonoInteresDavi = [];
  pagoMinimoDavi = [];

  numeroCuotaOtra = [];
  saldoOtra = [];
  abonoCapitalOtra = [];
  abonoInteresOtra = [];
  pagoMinimoOtra = [];
  
  //variable para ocultar/mostrar las tablas de amortización
  showTableDavi: boolean = false;
  
  constructor() {
    
  }

  showHiddenTable(){
  	this.showTableDavi = true;
    this.abonoCapitalDavi = Math.round( this.totalSaldo/this.cantidadCuotasDavi );
    this.tasaDavi = this.interesDavi / 100; 

    //columna cuota: numeroCuotaDavi[]  
    for (var i = 0; i< 4; i++) {
      
      if (i <= 1) {
        this.numeroCuotaDavi[i] = i+1;
        this.saldoDavi[i] = Math.round ( this.totalSaldo - (this.abonoCapitalDavi*i) );
        this.abonoInteresDavi[i] = Math.round( (this.totalSaldo - (this.abonoCapitalDavi*i))*this.tasaDavi ) ;
      }else{
        this.numeroCuotaDavi[i] = Math.round( this.cantidadCuotasDavi - (3-i) );
        this.saldoDavi[i] = Math.round(this.totalSaldo - (this.abonoCapitalDavi*(this.cantidadCuotasDavi - (3-i)))) ;
        this.abonoInteresDavi[i] = Math.round( (this.totalSaldo - (this.abonoCapitalDavi*(this.cantidadCuotasDavi - (3-i))))*this.tasaDavi );
      }
      this.pagoMinimoDavi[i] = this.abonoCapitalDavi + this.abonoInteresDavi[i];
    }
    
  }

  onInputFunction(){
    this.showHiddenTable();
  }

  ngOnInit(){
    this.cantidadCuotasDavi = 4;
    this.cantidadCuotasOtra = 4;
  }
}
