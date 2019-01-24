import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-chat',
  templateUrl: './preguion.component.html',
  styleUrls: ['./preguion.component.scss'],
  providers: [ MessageService ]
})
export class PreguionComponent implements OnInit {
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
