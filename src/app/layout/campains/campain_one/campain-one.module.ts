
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule , ReactiveFormsModule} from '@angular/forms';
import {CampainOneRoutingModule} from './campain-one-routing.module';

import { StatModule} from '../../../shared/modules';
import {AccordionModule, InputTextModule} from 'primeng/primeng';

import {CampainOneComponent} from './campain-one.component';
import {
  TimelineComponent,
  NotificationComponent,
  ChatComponent
} from './components';


@NgModule({
  imports: [
    CommonModule,
    NgbCarouselModule,
    NgbAlertModule,
    CampainOneRoutingModule,
    StatModule,
    FormsModule,
    ReactiveFormsModule,
    AccordionModule,
    InputTextModule
  ],
  declarations: [
    CampainOneComponent,
    TimelineComponent,
    NotificationComponent,
    ChatComponent
  ]
})
export class CampainOneModule {}

