import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-validacion',
  templateUrl: './validacion.component.html',
  styleUrls: ['./validacion.component.scss'],
  providers: [ MessageService ]
})
export class ValidacionComponent implements OnInit {
  
  constructor() { }
  ngOnInit() {
    
  }
}
