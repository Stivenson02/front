import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { CampainRoutingModule } from './campain-routing.module';
import { CampainComponent } from './campain.component';

@NgModule({
  imports: [
    CommonModule,
    CampainRoutingModule,
    TranslateModule,
    NgbDropdownModule,
  ],
  declarations: [CampainComponent]
})
export class CampainModule {}
