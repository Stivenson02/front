import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Reg_AleatorioComponent } from './reg_aleatorio.component';

const routes: Routes = [
    {
        path: '',
        component: Reg_AleatorioComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class Reg_AleatorioRoutingModule {}
