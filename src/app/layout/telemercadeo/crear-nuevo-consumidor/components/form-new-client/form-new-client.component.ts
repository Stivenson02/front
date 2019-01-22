import { Component, OnInit } from '@angular/core';
//import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
//import { DataSource } from '@angular/cdk/table';
import { routerTransition } from '../../../../../router.animations';

@Component({
    selector: 'app-form-new-client',
    templateUrl: './form-new-client.component.html',
    styleUrls: ['./form-new-client.component.scss'],
    animations: [routerTransition()]
})
export class FormNewClientComponent implements OnInit {

    constructor() {
          
    }
	    
    ngOnInit() { 
    	
    }
}