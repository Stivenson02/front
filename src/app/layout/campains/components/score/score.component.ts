import {Component, OnInit, ViewChild} from '@angular/core';
import { MenuItem, SelectItem } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { DataSource } from '@angular/cdk/table';
import {SEARCHREGISTER} from './tables/SearchRegister';


export interface UserData {
  calificacion: string;
  tipo: string;
}

/** Constants used to fill up our data base. */
const COLORS: string[] = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
  'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
const NAMES: string[] = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];

interface ngDoCheck {
  ngDoCheck(): void
}

/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss'],
  providers: [ MessageService ]
})
export class ScoreComponent implements  OnInit, ngDoCheck {
  searchregister = SEARCHREGISTER;
  display: boolean;
  calificate: string;
  selectedCalificate: string;
  object: any;
  colorBoton: string;
  observations: string;
  show: boolean;
  campFilter = "";

  showDialog() {
    this.display = true;
  }

  displayedColumns: string[] = ['calificacion', 'tipo'];
  dataSource: MatTableDataSource<UserData>;


  @ViewChild(MatSort) sort: MatSort;

  constructor(private messageService: MessageService) {

    const users = this.searchregister;
    this.dataSource = new MatTableDataSource(users);
  }
  ngDoCheck() {
    if (this.display == false) {
      this.campFilter = undefined;
      this.applyFilter(" ");
    }
  }

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.calificate = "Seleccionar Calificacion";
    this.colorBoton = 'ui-button-info';
  }

  save () {
    this.show = true;
    this.colorBoton = 'btn btn-success';
    this.object = this.selectedCalificate;
    this.display = false;
    this.calificate = this.object;
    this.messageService.add({severity: 'success', summary: 'Calificacion', detail: this.object});
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  finishProcess() {
    this.messageService.add({severity: 'info', summary: 'Proceso', detail: 'Finalizado'});
  }
}

