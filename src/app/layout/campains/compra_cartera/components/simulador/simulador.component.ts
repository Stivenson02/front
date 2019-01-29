import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-simulador',
  templateUrl: './simulador.component.html',
  styleUrls: ['./simulador.component.scss'],
  providers: [ MessageService ]
})
export class SimuladorComponent implements OnInit {
  
  constructor() { }
  ngOnInit() {
    
  }
}
