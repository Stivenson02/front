import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ChartsModule as Ng2Charts } from 'ng2-charts';

import { CrearNuevoConsumidorRoutingModule } from './crear-nuevo-consumidor-routing.module';
import { CrearNuevoConsumidor } from './crear-nuevo-consumidor.component';
import { PageHeaderModule } from '../../../shared';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';

//components

import { InitialFormComponent, FormNewClientComponent } from './components'; 

@NgModule({
    imports: [CommonModule, Ng2Charts, CrearNuevoConsumidorRoutingModule, PageHeaderModule, MatSelectModule, MatInputModule, MatFormFieldModule, FormsModule, ReactiveFormsModule, MatCardModule],
    declarations: [CrearNuevoConsumidor, InitialFormComponent, FormNewClientComponent]
})
export class CrearNuevoConsumidorModule {}
