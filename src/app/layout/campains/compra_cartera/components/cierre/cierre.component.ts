import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-cierre',
  templateUrl: './cierre.component.html',
  styleUrls: ['./cierre.component.scss'],
  providers: [ MessageService ]
})
export class CierreComponent implements OnInit {
  
  motivosNoInteres = [
    "No tiene cartera para comprar",
  	"Paga a una cuota",
  	"Cliente interesado pero no registra la TDC",
  	"Cliente tercera edad",
  	"No tiene deuda",
  	"Cupo inferior a la deuda que posee",
  	"Cliente cuelga llamada",
  	"Ya realizo compra de cartera recientemente",
  	"No tiene deudas con otros bancos",
  	"Cupo muy bajo",
  	"Desconfía del servicio",
  	"Mejor servicio de otro Banco",
  	"No cumple perfil",
  	"No desea ser contactado por teléfono",
  	"No lo necesita",
  	"No tiene cartera para comprar",
  	"Posible Interesado - Cupos Bajos",
  	"Servicio deficiente",
  	"Tasa de interes muy alta",
  	"Ya no tiene tarjeta con el banco",
  	"Desea retirarse de Davivienda"
  ]
  constructor() { }
  ngOnInit() {
    
  }
}
