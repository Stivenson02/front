import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';
import {DataCalculoCuotas} from '../../models/data-calculo-cuotas';

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
  public abono_capital_calculo: number;
  public data_simulator_array: any;
  public data_simulator: DataCalculoCuotas;

  constructor(private messageService: MessageService) {

  }

  ngOnInit() {
    this.tasa = "1.53";
    this.show_alert_simulator = false;
  }

  simulator() {
    if (!this.valor || !this.cuotas || this.cuotas <= 1 || this.cuotas >= 37) {
      this.show_alert_simulator = true;
    } else {
      this.show_alert_simulator = false;
    }

    if (!this.show_alert_simulator) {
      this.data_simulator_array = new Array();
      var saldo = this.valor;
      var interes = 0;
      this.messageService.add({severity: 'info', summary: 'Contacto', detail: 'Establecido'});
      this.abono_capital_calculo = Math.round( this.valor / this.cuotas);
      for (var i = 1; i <= 3; i++) {
        if (saldo != 0) {
        interes =  Math.round( saldo * 0.0163);
        this.data_simulator = new DataCalculoCuotas();
        this.data_simulator._id = i;
        this.data_simulator.saldo = saldo;
        this.data_simulator.abono_capital = this.abono_capital_calculo;
        this.data_simulator.abono_intereses = interes;
        this.data_simulator.pago_minimo =  this.data_simulator.abono_capital + this.data_simulator.abono_intereses ;
        this.data_simulator_array.push( this.data_simulator);
        saldo = this.data_simulator.saldo - this.abono_capital_calculo;
        }
      }
    }
  }
}
