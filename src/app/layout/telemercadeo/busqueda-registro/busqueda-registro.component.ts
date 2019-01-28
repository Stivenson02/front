import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';


@Component({
    selector: 'app-busqueda-registro',
    templateUrl: './busqueda-registro.component.html',
    styleUrls: ['./busqueda-registro.component.scss'],
    animations: [routerTransition()]
})
export class BusquedaRegistroComponent implements OnInit {
    
    
    constructor() {}

    ngOnInit() {
        
    }
    
}
