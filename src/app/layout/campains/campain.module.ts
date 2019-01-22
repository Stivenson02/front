import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import {NgbAlertModule, NgbCarouselModule, NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';

import { CampainRoutingModule } from './campain-routing.module';
import { CampainComponent } from './campain.component';
import {
  AddressComponent,
  EmailsComponent,
  HistoryTmkComponent,
  PersonalDataComponent,
  PhonesComponent,
  ScoreComponent
} from './components';
import {StatModule} from '../../shared/modules';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  AccordionModule, DialogModule, InputTextareaModule,
  InputTextModule, ListboxModule, MessageModule,
  MessagesModule,
  ScrollPanelModule,
  SplitButtonModule,
  TabMenuModule,
  TabViewModule
} from 'primeng/primeng';
import {ToastModule} from 'primeng/toast';
import {MatFormFieldModule, MatInputModule, MatNativeDateModule, MatPaginatorModule, MatTableModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    CampainRoutingModule,
    TranslateModule,
    NgbDropdownModule,
    NgbCarouselModule,
    NgbAlertModule,
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
    MatInputModule
  ],
  declarations: [
    CampainComponent,
    PersonalDataComponent,
    PhonesComponent,
    AddressComponent,
    EmailsComponent,
    HistoryTmkComponent,
    ScoreComponent]
})
export class CampainModule {}
