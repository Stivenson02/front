import { Component, OnInit, Output, EventEmitter } from '@angular/core';
//import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
//import { DataSource } from '@angular/cdk/table';
import { routerTransition } from '../../../../../router.animations';

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
    selector: 'app-initial-form',
    templateUrl: './initial-form.component.html',
    styleUrls: ['./initial-form.component.scss'],
    animations: [routerTransition()]
})
export class InitialFormComponent implements OnInit {

    constructor() {
          
    }
	
    showFormNewClient: boolean = true;
    showInitialFrom: boolean = true;

    @Output() showFormNewClientEvent = new EventEmitter<boolean>();
    @Output() showInitialFromEvent = new EventEmitter<boolean>();

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

    ngOnInit() { 
    	
    }

    changeViewForm(){
        this.showInitialFrom = false;
        this.showFormNewClient = true;        
        this.showFormNewClientEvent.emit(this.showFormNewClient);
        this.showInitialFromEvent.emit(this.showInitialFrom);
    }
}