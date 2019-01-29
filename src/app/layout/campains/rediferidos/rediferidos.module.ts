import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule} from '@angular/forms';
import { RediferidosRoutingModule } from './rediferidos-routing.module';
import {
  InputTextModule, MessageModule, MessagesModule,

} from 'primeng/primeng';

import { RediferidosComponent } from './rediferidos.component';

import {
  Guion1Component
} from './components';
import {ToastModule} from 'primeng/toast';

import {PreguionComponent} from '../components';

@NgModule({
  imports: [
    CommonModule,
    NgbCarouselModule,
    NgbAlertModule,
    RediferidosRoutingModule,
    FormsModule,
    InputTextModule,
    MessagesModule,
    MessageModule,
    ToastModule,
  ],
  declarations: [
    RediferidosComponent,
    Guion1Component,
    PreguionComponent

  ]
})
export class RediferidosModule {

}

