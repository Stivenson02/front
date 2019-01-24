import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-chat',
  templateUrl: './rediferidos.component.html',
  styleUrls: ['./rediferidos.component.scss'],
  providers: [ MessageService ]
})
export class RediferidosComponent implements OnInit {
  telefono: string;
  selectedCalificate: string;
  showScript:boolean;

  constructor(private messageService: MessageService) { }
  ngOnInit() {
    this.telefono = "42000";
    this.showScript = false;
  }

  selectNumeber(telef){
    this.showScript= true;
    localStorage.setItem('submenu', 'true')
    this.messageService.add({severity: 'info', summary: 'Contacto', detail: 'Establecido'});
    this.selectedCalificate = telef;
  }
}
