import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-detalle-oferta',
  templateUrl: './detalle-oferta.component.html',
  styleUrls: ['./detalle-oferta.component.scss'],
  providers: [ MessageService ]
})
export class DetalleOfertaComponent implements OnInit {
  
  constructor() { }
  ngOnInit() {
    
  }
}
