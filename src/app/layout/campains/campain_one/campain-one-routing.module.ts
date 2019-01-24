import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CampainOneComponent} from './campain-one.component';
import {
  ChatComponent, RediferidoComponent
} from './components';


const routes: Routes = [
  {
    path: '', component: CampainOneComponent,
    children: [
      { path:'guion', component: ChatComponent},
      { path:'rediferido', component: RediferidoComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampainOneRoutingModule {
}
