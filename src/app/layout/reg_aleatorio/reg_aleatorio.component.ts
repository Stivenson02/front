import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

export interface Campañas {
  value: string;
  viewValue: string;
}

@Component({
    selector: 'app-charts',
    templateUrl: './reg_aleatorio.component.html',
    styleUrls: ['./reg_aleatorio.component.scss'],
    animations: [routerTransition()]
})
export class Reg_AleatorioComponent implements OnInit {
    
    campañas: Campañas[] = [
        {value: 'campaña-1', viewValue: 'Davivienda - Bienvenida'},
        {value: 'campaña-2', viewValue: 'Davivienda - Rediferidos'},
        {value: 'campaña-3', viewValue: 'Davivienda - Seguros'}
    ];
    constructor() {}

    ngOnInit() {
        
    }
}
