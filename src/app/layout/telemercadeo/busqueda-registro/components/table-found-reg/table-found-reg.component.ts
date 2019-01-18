import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { DataSource } from '@angular/cdk/table';

export interface UserData {
  telemercadeo: string;
  etapa: string;
  base: string;
  consumidor: string;
  nombre: string;
  grupo_causal: string;
  causal: string;
  fecha_tmk: string;
  usuario: string;
  telefono: string;
  
}

/** Constants used to fill up our data base. */
const COLORS: string[] = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
  'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
const NAMES: string[] = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];

/**
 * @title Data table with sorting, pagination, and filtering.
 */

@Component({
    selector: 'app-table-found-reg',
    templateUrl: './table-found-reg.component.html',
    styleUrls: ['./table-found-reg.component.scss']
})
export class TableFoundRegComponent implements OnInit {
    
  displayedColumns: string[] = ['telemercadeo', 'etapa', 'base', 'consumidor', 'nombre', 'grupo_causal', 'causal', 'fecha_tmk', 'usuario', 'teléfono'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

    constructor() {
	    // Create 100 users
	    const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

	    // Assign the data to the data source for the table to render
	    this.dataSource = new MatTableDataSource(users);
     }
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
/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name =
      NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 100).toString(),
    color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
  };
}
