import { Component, OnInit } from '@angular/core';
import {MenuItem, SelectItem} from 'primeng/api';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss'],
  providers: [ MessageService ]
})
export class ScoreComponent implements OnInit {
  display: boolean = false;
  calificate: string;
  interested: SelectItem[];
  noInterested: SelectItem[];
  callback: SelectItem[];
  noCash: SelectItem[];
  otherDialed: SelectItem[];
  selectedCalificate: string[];
  object: any;
  colorBoton: string;
  observations: string;

  showDialog() {
    this.display = true;
  }

  constructor(private messageService: MessageService) {
    this.interested = [
      {label:'Rediferido / una TDC', value:{id:1, name: 'Rediferido / una TDC', code: 'TDC1'}},
      {label:'Rediferido / dos TDC', value:{id:2, name: 'Rediferido / dos TDC', code: 'TDC2'}}
    ];
    this.noInterested = [
      {label:'No lo necesita', value:{id:1, name: 'No lo necesita', code: ''}},
      {label:'Desconfia del servicio', value:{id:3, name: 'Desconfia del servicio', code: ''}},
      {label:'Tasa de interes Alta', value:{id:4, name: 'Tasa de interes Alta', code: ''}},
      {label:'Mal Servicio', value:{id:5, name: 'Mal Servicio', code: ''}},
      {label:'Cartera/ Tiene Saldo en Mora', value:{id:6, name: 'Cartera/ Tiene Saldo en Mora', code: ''}},
      {label:'Cancelo Tarjeta de Credito', value:{id:7, name: 'Cancelo Tarjeta de Credito', code: ''}},
      {label:'Plazo muy largo', value:{id:8, name: 'Plazo muy largo', code: ''}},
      {label:'Nunca tuvo o no tiene TDC', value:{id:9, name: 'Nunca tuvo o no tiene TDC', code: ''}},
      {label:'Tiene compra de cartera', value:{id:10, name: 'Tiene compra de cartera', code: ''}},
      {label:'Saldo muy bajo para rediferir', value:{id:11, name: 'Saldo muy bajo para rediferir', code: ''}},
      {label:'Tarjeta con tasa preferencial', value:{id:12, name: 'Tarjeta con tasa preferencial', code: ''}},
      {label:'Ya no tiene Rediferido', value:{id:13, name: 'Ya no tiene Rediferido', code: ''}},
      {label:'Conforme con el plazo actual', value:{id:14, name: 'Conforme con el plazo actual', code: ''}},
      {label:'Cliente no confia por confirmacion numero TC', value:{id:15, name: 'Cliente no confia por confirmacion numero TC', code: ''}},
      {label:'Rediferido/ Comunicacion menor a 3 meses', value:{id:16, name: 'Rediferido/ Comunicacion menor a 3 meses', code: ''}},
      {label:'Cliente Difiere todo a una sola cuota', value:{id:17, name: 'Cliente Difiere todo a una sola cuota', code: ''}}

    ];
    this.callback = [
      {label:'Volver a llamar', value:{id:1, name: 'Volver a llamar', code: ''}},
      {label:'No tiene tiempo disponible', value:{id:2, name: 'No tiene tiempo disponible', code: ''}},
      {label:'Devuelve la llamada', value:{id:3, name: 'Devuelve la llamada', code: ''}},
      {label:'Llamada programada', value:{id:4, name: 'Llamada programada', code: ''}},
    ];
    this.noCash = [
      {label:'Telefono Ocupado', value:{id:1, name: 'Telefono Ocupado', code: ''}},
      {label:'No contestan', value:{id:1, name: 'No contestan', code: ''}},
      {label:'Dejan Esperando en linea', value:{id:1, name: 'Dejan Esperando en linea', code: ''}},
      {label:'Se deja mensaje con otra persona', value:{id:1, name: 'Se deja mensaje con otra persona', code: ''}},
      {label:'Mensaje Contestador', value:{id:1, name: 'Mensaje Contestador', code: ''}},
      {label:'Fax', value:{id:1, name: 'Fax', code: ''}},
      {label:'Error en la llamada', value:{id:1, name: 'Error en la llamada', code: ''}},
      {label:'Llamada cortada', value:{id:1, name: 'Llamada cortada', code: ''}}
    ];
    this.otherDialed = [
      {label:'Vive fuera del pais', value:{id:1, name: 'Vive fuera del pais', code: ''}},
      {label:'No vive hay', value:{id:1, name: 'No vive hay', code: ''}},
      {label:'Prospecto Fallecido', value:{id:1, name: 'Prospecto Fallecido', code: ''}},
      {label:'Imposible Localizar', value:{id:1, name: 'Imposible Localizar', code: ''}},
      {label:'Cliente de viaje', value:{id:1, name: 'Cliente de viaje', code: ''}},
    ];
  }

  ngOnInit() {
    this.calificate = "Seleccionar Calificacion";
    this.colorBoton = 'ui-button-info';
  }

  save () {
    this.colorBoton = 'btn btn-success';
    this.object = this.selectedCalificate;
    this.display = false;
    this.calificate = this.object.name;
    this.messageService.add({severity: 'success', summary: 'Calificacion', detail: this.object.name});
  }

}
