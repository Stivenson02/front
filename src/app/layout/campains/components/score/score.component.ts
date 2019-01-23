import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import { MenuItem, SelectItem } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { DataSource } from '@angular/cdk/table';
import {SEARCHREGISTER} from './tables/SearchRegister';

export interface UserData {
  calificacion: string;
  tipo: string;
}

interface ngDoCheck {
  ngDoCheck(): void;
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
  listen: boolean;
  calificate: string;
  object: any;
  colorBoton: string;
  observations: string;
  show: boolean;
  campFilter = "";

  @HostListener('document:keyup', ['$event'])
  onKeyUp(ev:KeyboardEvent) {
    // do something meaningful with it
    if (ev.key == 'Alt' ){
      this.listen=true;
    }
    if (this.listen){
      if (ev.key == 'q' ){
        this.showDialog();
      }

      if (ev.key != 'Alt'){
        this.listen = false;
      }
    }
  }

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
    this.listen = false;
    this.dataSource.sort = this.sort;
    this.calificate = "Seleccionar Calificacion";
    this.colorBoton = 'ui-button-info';
  }

  save (selectCalificate) {
    this.show = true;
    this.colorBoton = 'btn btn-success';
    this.object = selectCalificate;
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
    location.reload();
  }
}

