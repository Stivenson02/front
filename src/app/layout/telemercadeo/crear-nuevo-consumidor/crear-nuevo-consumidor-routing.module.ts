import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearNuevoConsumidor } from './crear-nuevo-consumidor.component';

const routes: Routes = [
    {
        path: '',
        component: CrearNuevoConsumidor
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CrearNuevoConsumidorRoutingModule {}
