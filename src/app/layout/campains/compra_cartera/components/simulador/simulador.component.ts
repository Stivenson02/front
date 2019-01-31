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
  tasaDavi: number; 

  interesOtra: number = 6;
  cantidadCuotasOtra: number = 8;
  tasaOtra: number;

  totalSaldo: number = 100;
  

  //Constantes para usar en las tablas

  cuotasSelects = Array.from(Array(35), (x, index) => index + 2);
  registrosTablas = [0,1,2,3];
  camposTablas = ["Cuota", "Saldo", "Abono capital", "Abono Intereses", "Pago mínimo"];
  //Variables-arreglos para mostrar en las tablas de amortización 

  numeroCuotaDavi = [];
  saldoDavi = [];
  abonoCapitalDavi: number;
  abonoInteresDavi = [];
  pagoMinimoDavi = [];

  numeroCuotaOtra = [];
  saldoOtra = [];
  abonoCapitalOtra : number;
  abonoInteresOtra = [];
  pagoMinimoOtra = [];
  
  //variable para ocultar/mostrar las tablas de amortización
  showTables: boolean = false;

  consultarActive: boolean = false;
  
  constructor() {
    
  }

  showHiddenTable(){
  	
    this.showTables = true;

    //datos Davivienda
    this.abonoCapitalDavi = this.totalSaldo/this.cantidadCuotasDavi;
    this.tasaDavi = this.interesDavi / 100; 

    //datos otra entidad
    this.abonoCapitalOtra = this.totalSaldo/this.cantidadCuotasOtra;
    this.tasaOtra = this.interesOtra / 100;

    //columna cuota: numeroCuotaDavi[]
    for (var i = 0; i< 4; i++) {
      
      this.abonoCapitalDavi = this.totalSaldo/this.cantidadCuotasDavi;
      this.abonoCapitalOtra = this.totalSaldo/this.cantidadCuotasOtra;
      if (i <= 1) {
        this.numeroCuotaDavi[i] = i+1;
        this.saldoDavi[i] = Math.round ( this.totalSaldo - (this.abonoCapitalDavi*i) );
        this.abonoInteresDavi[i] = Math.round( (this.totalSaldo - (this.abonoCapitalDavi*i))*this.tasaDavi ) ;

        this.numeroCuotaOtra[i] = i+1;
        this.saldoOtra[i] = Math.round ( this.totalSaldo - (this.abonoCapitalOtra*i) );
        this.abonoInteresOtra[i] = Math.round( (this.totalSaldo - (this.abonoCapitalOtra*i))*this.tasaOtra ) ;

      }else{
        this.numeroCuotaDavi[i] = Math.round( this.cantidadCuotasDavi - (3-i) );
        this.saldoDavi[i] = Math.round(this.totalSaldo - (this.abonoCapitalDavi*(this.cantidadCuotasDavi - (3-i)))) ;
        this.abonoInteresDavi[i] = Math.round( (this.totalSaldo - (this.abonoCapitalDavi*(this.cantidadCuotasDavi - (3-i))))*this.tasaDavi );

        this.numeroCuotaOtra[i] = Math.round( this.cantidadCuotasOtra - (3-i) );
        this.saldoOtra[i] = Math.round(this.totalSaldo - (this.abonoCapitalOtra*(this.cantidadCuotasOtra - (3-i)))) ;
        this.abonoInteresOtra[i] = Math.round( (this.totalSaldo - (this.abonoCapitalOtra*(this.cantidadCuotasOtra - (3-i))))*this.tasaOtra );
      }
      this.pagoMinimoDavi[i] = Math.round( this.abonoCapitalDavi + this.abonoInteresDavi[i] );
      this.pagoMinimoOtra[i] = Math.round( this.abonoCapitalOtra + this.abonoInteresOtra[i] );
    }
    this.abonoCapitalDavi = Math.round( this.abonoCapitalDavi);
    this.abonoCapitalOtra = Math.round( this.abonoCapitalOtra);
  }

  onInputFunction(){
    if (this.showTables) {
      this.showHiddenTable();
    }
  }

  ngOnInit(){
    this.cantidadCuotasDavi = 4;
    this.cantidadCuotasOtra = 4;
  }
}
