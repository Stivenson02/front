import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';

import {FormsModule} from "@angular/forms";
import {ToastModule} from "primeng/toast";
import {ButtonModule, ConfirmationService, ConfirmDialogModule, DropdownModule} from "primeng/primeng";
import {UpdateAvatarComponent} from "./components";

@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        ProfileRoutingModule,
        FormsModule,
        ToastModule,
        DropdownModule,
        ButtonModule,
        ConfirmDialogModule,
    ],
    declarations: [
        ProfileComponent,
        UpdateAvatarComponent
    ]
})
export class ProfileModule {}
