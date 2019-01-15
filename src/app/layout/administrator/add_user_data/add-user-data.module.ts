import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import {AddUserDataRoutingModule} from './add-user-data-routing.module';
import {AddUserDataComponent} from './add-user-data.component';
import {
  TimelineComponent,
  NotificationComponent,
  ChatComponent
} from './components';
import { StatModule} from '../../../shared/modules';


@NgModule({
  imports: [
    CommonModule,
    NgbCarouselModule,
    NgbAlertModule,
    AddUserDataRoutingModule,
    StatModule
  ],
  declarations: [
    AddUserDataComponent,
    TimelineComponent,
    NotificationComponent,
    ChatComponent
  ]
})
export class AddUserDataModule {}
