import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CampainOneComponent} from './campain-one.component';
import {ChatComponent} from './components';


const routes: Routes = [
  {
    path: '', component: CampainOneComponent,
    children: [
      { path:'guion', component: ChatComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampainOneRoutingModule {
}
