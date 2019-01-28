import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompraCarteraComponent } from './compra-cartera.component';
import { ChatComponent } from './components';

const routes: Routes = [
  {
    path: '', component: CompraCarteraComponent,
    children: [
      { path:'guion', component: ChatComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompraCarteraRoutingModule {
}
