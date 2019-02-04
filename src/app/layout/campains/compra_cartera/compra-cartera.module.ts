import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { CompraCarteraRoutingModule } from './compra-cartera-routing.module';
import { environment } from '../../../../environments/environment';

import { CompraCarteraComponent } from './compra-cartera.component';
import { FormsModule } from '@angular/forms';

//Scrips
import {
  Guion1Component, OfertaInicialComponent, DetalleOfertaComponent, EncuestaComponent, ValidacionComponent, CierreComponent
} from './components';

import { 
  SimuladorComponent
} from '../components/campains_components';
import { ToastModule } from 'primeng/toast';

@NgModule({
  imports: [
    CommonModule,
    NgbCarouselModule,
    NgbAlertModule,
    CompraCarteraRoutingModule,
    ToastModule,
    FormsModule
  ],
  declarations: [
    CompraCarteraComponent,
    Guion1Component,
    OfertaInicialComponent,
    DetalleOfertaComponent, 
    SimuladorComponent, 
    EncuestaComponent, 
    ValidacionComponent, 
    CierreComponent
  ]
})
export class CompraCarteraModule {

}

