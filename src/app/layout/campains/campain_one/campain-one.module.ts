
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { CampainOneRoutingModule } from './campain-one-routing.module';
import { environment } from '../../../../environments/environment';

import { StatModule } from '../../../shared/modules';
import { AccordionModule, InputTextModule, MenuItem, ScrollPanelModule, TabMenuModule, TabViewModule } from 'primeng/primeng';

import { CampainOneComponent } from './campain-one.component';
import { AddressComponent, PhonesComponent, EmailsComponent, HistoryTmkComponent, PersonalDataComponent } from './components';

//guiones
import {
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
    InputTextModule,
    TabMenuModule,
    TabViewModule,
    ScrollPanelModule
  ],
  declarations: [
    CampainOneComponent,
    ChatComponent,
    PersonalDataComponent,
    PhonesComponent,
    AddressComponent,
    EmailsComponent,
    HistoryTmkComponent
  ]
})
export class CampainOneModule {

}

