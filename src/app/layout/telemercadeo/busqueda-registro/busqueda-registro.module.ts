import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule as Ng2Charts } from 'ng2-charts';

import { BusquedaRegistroRoutingModule } from './busqueda-registro-routing.module';
import { BusquedaRegistroComponent } from './busqueda-registro.component';
import { PageHeaderModule } from '../../../shared';

@NgModule({
    imports: [CommonModule, Ng2Charts, BusquedaRegistroRoutingModule, PageHeaderModule],
    declarations: [BusquedaRegistroComponent]
})
export class BusquedaRegistroModule {}
