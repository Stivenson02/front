import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule , ReactiveFormsModule} from '@angular/forms';
import {AddUserDataRoutingModule} from './add-user-data-routing.module';

import { StatModule} from '../../../shared/modules';
import {AccordionModule, InputTextModule} from 'primeng/primeng';

import {AddUserDataComponent} from './add-user-data.component';
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
    AddUserDataRoutingModule,
    StatModule,
    FormsModule,
    ReactiveFormsModule,
    AccordionModule,
    InputTextModule
  ],
  declarations: [
    AddUserDataComponent,
    TimelineComponent,
    NotificationComponent,
    ChatComponent
  ]
})
export class AddUserDataModule {}
