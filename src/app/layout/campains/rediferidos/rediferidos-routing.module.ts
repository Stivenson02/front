import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RediferidosComponent} from './rediferidos.component';
import {RediferidoComponent
} from './components';
import {PreguionComponent} from '../components';


const routes: Routes = [
  {
    path: '', component: RediferidosComponent,
    children: [
      { path: 'preguion', component: PreguionComponent},
      { path: 'rediferido', component: RediferidoComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RediferidosRoutingModule {
}
