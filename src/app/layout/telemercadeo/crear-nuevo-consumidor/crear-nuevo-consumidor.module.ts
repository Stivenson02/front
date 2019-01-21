import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule as Ng2Charts } from 'ng2-charts';

import { CrearNuevoConsumidorRoutingModule } from './crear-nuevo-consumidor-routing.module';
import { CrearNuevoConsumidor } from './crear-nuevo-consumidor.component';
import { PageHeaderModule } from '../../../shared';

@NgModule({
    imports: [CommonModule, Ng2Charts, CrearNuevoConsumidorRoutingModule, PageHeaderModule],
    declarations: [CrearNuevoConsumidor]
})
export class CrearNuevoConsumidorModule {}
