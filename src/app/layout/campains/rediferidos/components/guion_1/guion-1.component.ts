import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-rediferido',
  templateUrl: './guion-1.component.html',
  styleUrls: ['./guion-1.component.scss'],
  providers: [ MessageService ]
})
export class Guion1Component implements OnInit {
  public valor: number;
  public cuotas: number;
  public show_alert_simulator: boolean;
  public tasa: string;
  public abono_capital: number;

  constructor(private messageService: MessageService) { }
  ngOnInit() {
    this.tasa = "1.53";
    this.show_alert_simulator = false;
  }

  simulator(){

    if (!this.valor || !this.cuotas || this.cuotas <= 1 || this.cuotas >= 37) {
      this.show_alert_simulator = true;
    } else {
      this.show_alert_simulator = false;
    }

    if (!this.show_alert_simulator) {
      this.messageService.add({severity: 'info', summary: 'Contacto', detail: 'Establecido'});
      this.abono_capital = this.valor / this.cuotas;
      console.log( Math.round(this.abono_capital) );
    }
  }
}
