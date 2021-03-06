import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompraCarteraComponent } from './compra-cartera.component';
import { Guion1Component } from './guion_1/guion-1.component';

const routes: Routes = [
  {
    path: '', component: CompraCarteraComponent,
    children: [
      { path:'guion-1', component: Guion1Component}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompraCarteraRoutingModule {
}
