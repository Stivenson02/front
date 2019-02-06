import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-simulador',
  templateUrl: './simulador.component.html',
  styleUrls: ['./simulador.component.scss'],
  providers: [ MessageService ]
})
export class SimuladorComponent implements OnInit {

  //variables de entrada (Simulador compra cartera)

  interesDavi: number;
  cantidadCuotasDavi: number;
  tasaDavi: number; 
  totalInteresDavi: number = 0;

  interesOtra: number;
  cantidadCuotasOtra: number;
  tasaOtra: number;
  totalInteresOtra: number = 0;

  totalSaldoMin: number = 200000;
  totalSaldo: number = 100;
  diferenciaInteresTotal: number = 0;

  enableTotalSaldo: boolean = true;
  
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
  // Esta función carga la información de la tabla y se llama cada vez qeu se actualizaalgun campo
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
    this.totalInteresDavi = this.totalSaldo*this.tasaDavi*((this.cantidadCuotasDavi + 1)/2);
    this.totalInteresOtra = this.totalSaldo*this.tasaOtra*((this.cantidadCuotasOtra + 1)/2);
    this.diferenciaInteresTotal = this.totalInteresDavi - this.totalInteresOtra;

    this.abonoCapitalDavi = Math.round( this.abonoCapitalDavi);
    this.abonoCapitalOtra = Math.round( this.abonoCapitalOtra);
  }

  onInputTotal(){
     if(!isNaN(this.totalSaldo) && this.totalSaldo >= this.totalSaldoMin ){
       this.onInputFunction();
     }else{
       this.showTables = false;
     }
  }
  // Eventos input en la entrada de datos para davivienda u otras entidades llama la función OnInputFunction
  onInputFunction(){
    if (isNaN(this.interesDavi) || isNaN(this.interesOtra) || this.interesDavi == 0 || this.interesOtra == 0 ) {
         this.showTables = false;
         this.enableTotalSaldo = true;
     }
     else{
      this.enableTotalSaldo = false;
     }
    if (this.enableTotalSaldo == false && this.totalSaldo >= this.totalSaldoMin ) {
      this.showHiddenTable();
    }
  }

  ngOnInit(){
    this.cantidadCuotasDavi = 4;
    this.cantidadCuotasOtra = 4;
  }
}
