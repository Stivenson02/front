
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { CampainOneRoutingModule } from './campain-one-routing.module';
import { environment } from '../../../../environments/environment';

import { StatModule } from '../../../shared/modules';
import {
  AccordionModule, DialogModule,
  InputTextModule, MessageModule, MessagesModule,
  ScrollPanelModule,
  SplitButtonModule,
  TabMenuModule,
  TabViewModule
} from 'primeng/primeng';

import { CampainOneComponent } from './campain-one.component';
import {AddressComponent, PhonesComponent, EmailsComponent, HistoryTmkComponent, PersonalDataComponent, ScoreComponent} from './components';

//Scrips
import {
  ChatComponent
} from './components';
import {ToastModule} from 'primeng/toast';

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
    ScrollPanelModule,
    SplitButtonModule,
    MessagesModule,
    MessageModule,
    ToastModule,
    DialogModule
  ],
  declarations: [
    CampainOneComponent,
    ChatComponent,
    PersonalDataComponent,
    PhonesComponent,
    AddressComponent,
    EmailsComponent,
    HistoryTmkComponent,
    ScoreComponent
  ]
})
export class CampainOneModule {

}

