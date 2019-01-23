import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule , ReactiveFormsModule} from '@angular/forms';
import {MyNotesRoutingModule} from './my-notes-routing.module';

import { StatModule} from '../../../shared/modules';
import {AccordionModule, InputTextModule} from 'primeng/primeng';

import {MyNotesComponent} from './my-notes.component';
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
    MyNotesRoutingModule,
    StatModule,
    FormsModule,
    ReactiveFormsModule,
    AccordionModule,
    InputTextModule
  ],
  declarations: [
    MyNotesComponent,
    TimelineComponent,
    NotificationComponent,
    ChatComponent
  ]
})
export class MyNotesModule {}
