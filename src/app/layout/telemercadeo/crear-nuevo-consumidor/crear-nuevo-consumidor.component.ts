import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';

@Component({
    selector: 'app-crear-nuevo-consumidor',
    templateUrl: './crear-nuevo-consumidor.component.html',
    styleUrls: ['./crear-nuevo-consumidor.component.scss'],
    animations: [routerTransition()]
})
export class CrearNuevoConsumidor implements OnInit {
    
    showFormNewClient: boolean = false;
    showInitialFrom: boolean = true;

    // bar chart
    constructor() {}

    ngOnInit() {
        
    }
    changeViewForm(){
    	this.showFormNewClient = true;
    	this.showInitialFrom = false;
    }
}
