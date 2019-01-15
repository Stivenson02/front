import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

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
    selector: 'app-reg_aleatorio',
    templateUrl: './reg_aleatorio.component.html',
    styleUrls: ['./reg_aleatorio.component.scss'],
    animations: [routerTransition()]
})
export class Reg_AleatorioComponent implements OnInit {
    selectedCampana: string;
    selectedEtapa: string;
    selectedBase: string;

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
    bases: Bases[] = [
        {value: 'base-1', viewValue: 'Davivienda - Base1'},
        {value: 'base-2', viewValue: 'Davivienda - Base2'},
        {value: 'base-3', viewValue: 'Davivienda - Base3'}
    ];
    constructor() {}

    ngOnInit() {
        
    }
}
