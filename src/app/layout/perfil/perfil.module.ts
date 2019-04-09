import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilRoutingModule } from './perfil-routing.module';
import { PerfilComponent } from './perfil.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, PerfilRoutingModule, PageHeaderModule],
    declarations: [PerfilComponent]
})
export class PerfilModule {}
