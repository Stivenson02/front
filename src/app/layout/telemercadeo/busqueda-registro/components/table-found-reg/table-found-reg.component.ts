import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { DataSource } from '@angular/cdk/table';


import { SEARCHREGISTER } from '../../tables/SearchRegister';  //objeto con los datos para la tabla
import { TableFoundReg } from '../../fieldsInterface/table-found-reg'; //Interface que define las columnas y el tipo de dato de las mismas

/**
 * @title Data table with sorting, pagination, and filtering.
 */

@Component({
    selector: 'app-table-found-reg',
    templateUrl: './table-found-reg.component.html',
    styleUrls: ['./table-found-reg.component.scss']
})
export class TableFoundRegComponent implements OnInit {
    
  constructor() {

    // load users with searchregister
    const users = this.searchregister;
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  searchregister = SEARCHREGISTER;
  // displayedColumns: arreglo con los id de cada campo (matColumnDef) del archivo html. 
  displayedColumns: string[] = ['telemercadeo', 'etapa', 'base', 'consumidor', 'nombre', 'grupo_causal', 'causal', 'fecha_tmk', 'usuario', 'telefono'];
  dataSource: MatTableDataSource<TableFoundReg>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

    
    ngOnInit() {
    	this.dataSource.paginator = this.paginator;
    	this.dataSource.sort = this.sort;
    }
    applyFilter(filterValue: string) {
    	this.dataSource.filter = filterValue.trim().toLowerCase();

    	if (this.dataSource.paginator) {
      		this.dataSource.paginator.firstPage();
    	}
 	}
}
