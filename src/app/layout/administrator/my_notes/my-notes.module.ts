import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule , ReactiveFormsModule} from '@angular/forms';
import {MyNotesRoutingModule} from './my-notes-routing.module';

import { StatModule} from '../../../shared/modules';
import {AccordionModule, ChartModule, InputTextModule, ScrollPanelModule} from 'primeng/primeng';

import {MyNotesComponent} from './my-notes.component';
import {AimBaseComponent, AverageDayComponent, AverageMonthComponent, DataUserComponent} from './components';

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
    InputTextModule,
    ScrollPanelModule,
    ChartModule
  ],
  declarations: [
    MyNotesComponent,
    AverageMonthComponent,
    AverageDayComponent,
    AimBaseComponent,
    DataUserComponent

  ]
})
export class MyNotesModule {}
