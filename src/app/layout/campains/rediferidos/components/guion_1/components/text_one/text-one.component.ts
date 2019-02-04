import { Component, OnInit } from '@angular/core';
import {MessageService, SelectItem} from 'primeng/api';
import {DataCalculoCuotas} from '../../../../models/data-calculo-cuotas';

@Component({
  selector: 'app-rediferido',
  templateUrl: './text-one.component.html',
  styleUrls: ['./text-one.component.scss'],
  providers: [ MessageService ]
})
export class TextOneComponent implements OnInit {
  public valor: number;
  public cuotas: number;
  public show_alert_simulator: boolean;
  public tasa: string;
  public abono_capital_calculo: number;
  public data_simulator_array: any;
  public data_simulator: DataCalculoCuotas;
  public continue_first: number;
  public continue_second: number;
  public continue_tree: number;
  public contestar_encuesta: number;

  types: SelectItem[];

  selectedType: string;

  constructor(private messageService: MessageService) {
    this.types = [
      {label: '02', value: '02', icon: 'fa fa-fw fa-child'},
      {label: '03', value: '03', icon: 'fa fa-fw fa-child'},
      {label: '04', value: '04', icon: 'fa fa-fw fa-child'},
      {label: '05', value: '05', icon: 'fa fa-fw fa-child'},
      {label: '06', value: '06', icon: 'fa fa-fw fa-child'},
      {label: '07', value: '07', icon: 'fa fa-fw fa-child'},
      {label: '08', value: '08', icon: 'fa fa-fw fa-child'},
      {label: '09', value: '09', icon: 'fa fa-fw fa-child'},
      {label: '10', value: '10', icon: 'fa fa-fw fa-child'},
      {label: '11', value: '11', icon: 'fa fa-fw fa-child'},
      {label: '12', value: '12', icon: 'fa fa-fw fa-child'},
      {label: '13', value: '13', icon: 'fa fa-fw fa-child'},
      {label: '14', value: '14', icon: 'fa fa-fw fa-child'},
      {label: '15', value: '15', icon: 'fa fa-fw fa-child'},
      {label: '16', value: '16', icon: 'fa fa-fw fa-child'},
      {label: '17', value: '17', icon: 'fa fa-fw fa-child'},
      {label: '18', value: '18', icon: 'fa fa-fw fa-child'},
      {label: '19', value: '19', icon: 'fa fa-fw fa-child'},
      {label: '20', value: '20', icon: 'fa fa-fw fa-child'},
      {label: '21', value: '21', icon: 'fa fa-fw fa-child'},
      {label: '22', value: '22', icon: 'fa fa-fw fa-child'},
      {label: '23', value: '23', icon: 'fa fa-fw fa-child'},
      {label: '24', value: '24', icon: 'fa fa-fw fa-child'},
      {label: '25', value: '25', icon: 'fa fa-fw fa-child'},
      {label: '26', value: '26', icon: 'fa fa-fw fa-child'},
      {label: '27', value: '27', icon: 'fa fa-fw fa-child'},
      {label: '28', value: '28', icon: 'fa fa-fw fa-child'},
      {label: '29', value: '29', icon: 'fa fa-fw fa-child'},
      {label: '30', value: '30', icon: 'fa fa-fw fa-child'},
      {label: '31', value: '31', icon: 'fa fa-fw fa-child'},
      {label: '32', value: '32', icon: 'fa fa-fw fa-child'},
      {label: '33', value: '33', icon: 'fa fa-fw fa-child'},
      {label: '34', value: '34', icon: 'fa fa-fw fa-child'},
      {label: '35', value: '35', icon: 'fa fa-fw fa-child'},
      {label: '36', value: '36', icon: 'fa fa-fw fa-child'}
    ];

  }

  ngOnInit() {
    this.tasa = "1.53";
    this.show_alert_simulator = false;
    this.continue_first = 0;
    this.continue_second = 0;
    this.continue_tree = 0;
    this.contestar_encuesta = 0;
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
      this.messageService.add({severity: 'info', summary: 'Calculo', detail: 'Efectivo'});
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
