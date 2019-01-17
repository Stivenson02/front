import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';

export interface Campanas {
  value: string;
  viewValue: string;
}
export interface Etapas {
  value: string;
  viewValue: string;
}
export interface Bases {
  value: string;
  viewValue: string;
}

@Component({
    selector: 'app-busqueda-registro',
    templateUrl: './busqueda-registro.component.html',
    styleUrls: ['./busqueda-registro.component.scss'],
    animations: [routerTransition()]
})
export class BusquedaRegistroComponent implements OnInit {
    
    selectedCampana: string;
    selectedEtapa: string;
    labelPosition = 'consumidor_id';
    checkVisibility: boolean = false;
    inputQuery: boolean = false;

    campanas: Campanas[] = [
        {value: 'campana-1', viewValue: 'Davivienda - Bienvenida'},
        {value: 'campana-2', viewValue: 'Davivienda - Rediferidos'},
        {value: 'campana-3', viewValue: 'Davivienda - Seguros'}
    ];
    etapas: Etapas[] = [
        {value: 'etapa-1', viewValue: 'Davivienda - Contactar'},
        {value: 'etapa-2', viewValue: 'Davivienda - Recuperar'},
        {value: 'etapa-3', viewValue: 'Davivienda - Remarcar'}
    ];

    constructor() {}

    ngOnInit() {
        
    }
    changeCheckVisibility(){
      if (!this.checkVisibility) {
        this.checkVisibility = true;
      }
    }
    changeInputVisibility(){
      if (!this.inputQuery) {
        this.inputQuery = true;
      }
    }
}
