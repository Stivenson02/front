import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import {FormsModule} from "@angular/forms";
import {ToastModule} from "primeng/toast";

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    LoginRoutingModule,
    FormsModule,
    ToastModule
  ],
    declarations: [LoginComponent]
})
export class LoginModule {}
