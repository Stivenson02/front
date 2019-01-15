import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import {AddUserDataRoutingModule} from './add-user-data-routing.module';
import {AddUserDataComponent} from './add-user-data.component';
import {MatExpansionModule, MatInputModule, MatSelectModule} from '@angular/material';
import {
  TimelineComponent,
  NotificationComponent,
  ChatComponent
} from './components';
import { StatModule} from '../../../shared/modules';
import {FormsModule , ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    NgbCarouselModule,
    NgbAlertModule,
    AddUserDataRoutingModule,
    StatModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AddUserDataComponent,
    TimelineComponent,
    NotificationComponent,
    ChatComponent
  ]
})
export class AddUserDataModule {}
