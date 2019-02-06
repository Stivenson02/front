import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RediferidosComponent} from './rediferidos.component';

import {PreguionComponent} from '../components';
import {Guion1Component} from './guion_1/guion-1.component';

const routes: Routes = [
  {
    path: '', component: RediferidosComponent,
    children: [
      { path: 'preguion', component: PreguionComponent},
      { path: 'guion-1', component: Guion1Component}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RediferidosRoutingModule {
}
