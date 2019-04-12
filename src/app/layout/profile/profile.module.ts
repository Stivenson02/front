import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';

import {FormsModule} from "@angular/forms";
import {ToastModule} from "primeng/toast";
import {DropdownModule} from "primeng/primeng";

@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        ProfileRoutingModule,
        FormsModule,
        ToastModule,
        DropdownModule,
    ],
    declarations: [ProfileComponent]
})
export class ProfileModule {}
