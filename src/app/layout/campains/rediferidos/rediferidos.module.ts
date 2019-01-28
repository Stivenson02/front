
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { RediferidosRoutingModule } from './rediferidos-routing.module';
import { environment } from '../../../../environments/environment';



import { StatModule } from '../../../shared/modules';
import {
  AccordionModule, ChartModule, DialogModule, InputTextareaModule,
  InputTextModule, ListboxModule, MessageModule, MessagesModule,
  ScrollPanelModule,
  SplitButtonModule,
  TabMenuModule,
  TabViewModule
} from 'primeng/primeng';

import { RediferidosComponent } from './rediferidos.component';

import {
   RediferidoComponent
} from './components';
import {ToastModule} from 'primeng/toast';
import {MatNativeDateModule, MatTableModule} from '@angular/material';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import {PreguionComponent} from '../components';

@NgModule({
  imports: [
    CommonModule,
    NgbCarouselModule,
    NgbAlertModule,
    RediferidosRoutingModule,
    StatModule,
    FormsModule,
    ReactiveFormsModule,
    AccordionModule,
    InputTextModule,
    TabMenuModule,
    TabViewModule,
    ScrollPanelModule,
    SplitButtonModule,
    MessagesModule,
    MessageModule,
    ToastModule,
    DialogModule,
    ListboxModule,
    InputTextareaModule,
    MatNativeDateModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    ChartModule
  ],
  declarations: [
    RediferidosComponent,
    RediferidoComponent,
    PreguionComponent

  ]
})
export class RediferidosModule {

}

