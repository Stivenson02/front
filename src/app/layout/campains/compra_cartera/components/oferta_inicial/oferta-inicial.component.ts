import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-oferta-inicial',
  templateUrl: './oferta-inicial.component.html',
  styleUrls: ['./oferta-inicial.component.scss'],
  providers: [ MessageService ]
})
export class OfertaInicialComponent implements OnInit {
  
  constructor() { }
  ngOnInit() {
    
  }
}
