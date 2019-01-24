
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { CampainOneRoutingModule } from './campain-one-routing.module';
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

import { CampainOneComponent } from './campain-one.component';
import {
  AddressComponent,
  PhonesComponent,
  EmailsComponent,
  HistoryTmkComponent,
  PersonalDataComponent,
  ScoreComponent,
  PreguionComponent
} from '../components';

//Scrips
import {
  ChatComponent, RediferidoComponent
} from './components';
import {ToastModule} from 'primeng/toast';
import {MatNativeDateModule, MatTableModule} from '@angular/material';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';

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
    CampainOneComponent,
    ChatComponent,
    PersonalDataComponent,
    PhonesComponent,
    AddressComponent,
    EmailsComponent,
    HistoryTmkComponent,
    ScoreComponent,
    PreguionComponent,
    RediferidoComponent
  ]
})
export class CampainOneModule {

}

