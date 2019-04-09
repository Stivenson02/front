import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-form',
    templateUrl: './perfil.component.html',
    styleUrls: ['./perfil.component.scss'],
    animations: [routerTransition()]
})
export class PerfilComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
