import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material';
import { CommonModule } from '@angular/common';

import { Reg_AleatorioRoutingModule } from './reg_aleatorio-routing.module';
import { Reg_AleatorioComponent } from './reg_aleatorio.component';
import { PageHeaderModule } from '../../shared';

import { MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
        
@NgModule({
    imports: [CommonModule, 
    		Reg_AleatorioRoutingModule, 
    		MatNativeDateModule,
    		PageHeaderModule, 
    		MatFormFieldModule, 
    		MatSelectModule, 
    		FormsModule, 
    		ReactiveFormsModule, 
    		],
    declarations: [Reg_AleatorioComponent],
    exports: []
})
export class Reg_AleatorioModule {}
