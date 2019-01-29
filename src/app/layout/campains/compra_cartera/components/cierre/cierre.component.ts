import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-cierre',
  templateUrl: './cierre.component.html',
  styleUrls: ['./cierre.component.scss'],
  providers: [ MessageService ]
})
export class CierreComponent implements OnInit {
  
  constructor() { }
  ngOnInit() {
    
  }
}
