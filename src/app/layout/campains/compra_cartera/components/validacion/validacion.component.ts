import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-validacion',
  templateUrl: './validacion.component.html',
  styleUrls: ['./validacion.component.scss'],
  providers: [ MessageService ]
})
export class ValidacionComponent implements OnInit {
  
  cedulaConsumidor: number;
  parcialCedula: string;
  constructor() { }

  ngOnInit() {
  	this.cedulaConsumidor = 123456789;
  	this.parcialCedula = this.cedulaConsumidor.toString().substr(1,4);
  }
}
