import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ListarComponent } from './listar.component';
import { FormsModule } from '@angular/forms';
import { EditarModule } from '../editar/editar.module';



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        EditarModule

    ],
    exports: [ListarComponent],
    declarations: [ListarComponent],
    providers: [],
})
export class ListarModule {
 }
