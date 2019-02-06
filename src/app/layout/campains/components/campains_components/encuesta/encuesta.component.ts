import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.scss'],
  providers: [ MessageService ]
})
export class EncuestaComponent implements OnInit {
  
	listaRespuestasEnviar = ["no", "si"];
  listaRespuestasPregunta1 = ["Ha aumentado", "Permanece igual", "Ha disminuido"];
	listaRespuestasPregunta2 = ["Muy buena", "Buena", "Regular", "Mala", "Muy mala"];
	listaRespuestasPregunta3 = ["Obligacion financiera", "Ahorrar"];
	
  	constructor() { }
  	ngOnInit() {
    
 	  }
}
