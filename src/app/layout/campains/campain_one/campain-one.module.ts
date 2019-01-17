
import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule , ReactiveFormsModule} from '@angular/forms';
import {CampainOneRoutingModule} from './campain-one-routing.module';

import { StatModule} from '../../../shared/modules';
import {AccordionModule, InputTextModule, MenuItem, ScrollPanelModule, TabMenuModule, TabViewModule} from 'primeng/primeng';

import {CampainOneComponent} from './campain-one.component';
import {
  AddressComponent,
  ChatComponent, EmailsComponent, HistoryTmkComponent, PersonalDataComponent
} from './components';
import {environment} from '../../../../environments/environment';
import {PhonesComponent} from './components/phones/phones.component';


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
export class CampainOneModule{

}

