import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule} from '@angular/forms';
import { RediferidosRoutingModule } from './rediferidos-routing.module';
import {
  AccordionModule, InputTextModule, MessageModule, MessagesModule, SelectButtonModule,

} from 'primeng/primeng';

import { RediferidosComponent } from './rediferidos.component';

import {
  PlanillaClienteComponent
} from './components';
import {ToastModule} from 'primeng/toast';
import {PreguionComponent} from '../components';
import {HttpClientModule} from '@angular/common/http';
import {
  EncuestaComponent,
  PluginTarjetasComponent,
  SimuladorRediferidosComponent,
  TextoInicialComponent,
  ValidacionComponent
} from '../components/campains_components';
import {Guion1Component} from './guion_1/guion-1.component';

@NgModule({
  imports: [
    CommonModule,
    NgbCarouselModule,
    NgbAlertModule,
    RediferidosRoutingModule,
    FormsModule,
    HttpClientModule,
    InputTextModule,
    MessagesModule,
    MessageModule,
    ToastModule,
    SelectButtonModule,
    AccordionModule
  ],
  declarations: [
    RediferidosComponent,
    Guion1Component,
    PreguionComponent,
    TextoInicialComponent,
    SimuladorRediferidosComponent,
    PluginTarjetasComponent,
    ValidacionComponent,
    EncuestaComponent,
    PlanillaClienteComponent
  ]
})
export class RediferidosModule {

}

