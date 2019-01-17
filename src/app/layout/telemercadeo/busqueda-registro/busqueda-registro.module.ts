import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material';
import { CommonModule } from '@angular/common';

import { BusquedaRegistroRoutingModule } from './busqueda-registro-routing.module';
import { BusquedaRegistroComponent } from './busqueda-registro.component';
import { PageHeaderModule } from '../../../shared';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material';
import { MatRadioModule } from '@angular/material/radio';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';

@NgModule({
    imports: [CommonModule,
    		BusquedaRegistroRoutingModule,
    		MatNativeDateModule,
    		PageHeaderModule,
    		MatFormFieldModule,
    		MatSelectModule,
            MatInputModule,
            MatRadioModule,
            MatSidenavModule,
            MatCardModule,
    		FormsModule,
    		ReactiveFormsModule,
    		],
    declarations: [BusquedaRegistroComponent],
    exports: []
})
export class BusquedaRegistroModule {}
