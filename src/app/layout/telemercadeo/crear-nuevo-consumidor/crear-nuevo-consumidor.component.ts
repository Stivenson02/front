import { Component, OnInit, Input } from '@angular/core';
import { routerTransition } from '../../../router.animations';

@Component({
    selector: 'app-crear-nuevo-consumidor',
    templateUrl: './crear-nuevo-consumidor.component.html',
    styleUrls: ['./crear-nuevo-consumidor.component.scss'],
    animations: [routerTransition()]
})
export class CrearNuevoConsumidor implements OnInit {
    
    showInitialFrom: boolean = true;
    showFormNewClient: boolean = false;
    
    // bar chart
    constructor() {}

    receiveShowFormNewClient($event){
        this.showFormNewClient = $event;
    }

    receiveShowInitialFrom($events){
        this.showInitialFrom = $events;
    }

    ngOnInit() {
        
    }
    
}
