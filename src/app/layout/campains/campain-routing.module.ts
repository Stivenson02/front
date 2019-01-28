import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CampainComponent } from './campain.component';

const routes: Routes = [
  {
    path: '',
    component: CampainComponent,
    children: [
      { path: 'campain_one', loadChildren: './campain_one/campain-one.module#CampainOneModule'},
      { path: 'compra-cartera', loadChildren: './compra_cartera/compra-cartera.module#CompraCarteraModule'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampainRoutingModule {}
