import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule as Ng2Charts } from 'ng2-charts';

import { Reg_AleatorioRoutingModule } from './reg_aleatorio-routing.module';
import { Reg_AleatorioComponent } from './reg_aleatorio.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
    imports: [CommonModule, Ng2Charts, Reg_AleatorioRoutingModule, PageHeaderModule],
    declarations: [Reg_AleatorioComponent]
})
export class Reg_AleatorioModule {}
