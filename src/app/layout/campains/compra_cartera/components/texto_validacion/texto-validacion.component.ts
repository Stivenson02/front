import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-texto-validacion',
  templateUrl: './texto-validacion.component.html',
  styleUrls: ['./texto-validacion.component.scss'],
  providers: [ MessageService ]
})
export class TextoValidacionComponent implements OnInit {
  
  constructor() { }
  ngOnInit() {
    
  }
}
