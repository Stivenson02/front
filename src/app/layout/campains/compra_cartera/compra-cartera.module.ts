import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { CompraCarteraRoutingModule } from './compra-cartera-routing.module';
import { environment } from '../../../../environments/environment';


import { CompraCarteraComponent } from './compra-cartera.component';

//Scrips
import {
  Guion1Component, OfertaInicialComponent
} from './components';
import { ToastModule } from 'primeng/toast';

@NgModule({
  imports: [
    CommonModule,
    NgbCarouselModule,
    NgbAlertModule,
    CompraCarteraRoutingModule,
    ToastModule
  ],
  declarations: [
    CompraCarteraComponent,
    Guion1Component,
    OfertaInicialComponent    
  ]
})
export class CompraCarteraModule {

}

