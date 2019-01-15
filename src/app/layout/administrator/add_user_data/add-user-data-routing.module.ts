import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddUserDataComponent} from './add-user-data.component';


const routes: Routes = [
  {
    path: '', component: AddUserDataComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddUserDataRoutingModule {
}
