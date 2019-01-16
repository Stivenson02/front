import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusquedaRegistroComponent } from './busqueda-registro.component';

const routes: Routes = [
    {
        path: '',
        component: BusquedaRegistroComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BusquedaRegistroRoutingModule {}
