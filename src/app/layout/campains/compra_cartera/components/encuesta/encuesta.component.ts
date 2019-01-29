import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.scss'],
  providers: [ MessageService ]
})
export class EncuestaComponent implements OnInit {
  
  constructor() { }
  ngOnInit() {
    
  }
}
