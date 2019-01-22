import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'davivienda', pathMatch: 'full' },
      {
        path: 'davivienda',
        children: [
          { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
          {
            path: 'administration',
            children: [
              { path: 'add_user_data', loadChildren: './administrator/add_user_data/add-user-data.module#AddUserDataModule'},
            ]},
          {
            path: 'workspace',
            children: [
              { path: '', loadChildren: './campains/campain.module#CampainModule'},
            ]},
          { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
          { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
          { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
          { path: 'forms', loadChildren: './form/form.module#FormModule' },
          { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
          { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
          { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
          { path: 'gestion-manual', loadChildren: './telemercadeo/reg_aleatorio/reg_aleatorio.module#Reg_AleatorioModule'},
          { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' },
          { path: 'busqueda-registro', loadChildren: './telemercadeo/busqueda-registro/busqueda-registro.module#BusquedaRegistroModule' },
          { path: 'crear-nuevo-consumidor', loadChildren: './telemercadeo/crear-nuevo-consumidor/crear-nuevo-consumidor.module#CrearNuevoConsumidorModule'}
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {}
