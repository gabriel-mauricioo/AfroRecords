import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ListarModule } from '../listar/listar.module';
import { AdicionarModule } from '../adicionar/adicionar.module';
import { ColaboradoresService } from '../colaboradores.service';
import { RemoverModule } from '../remover/remover.module';
import { EditarModule } from '../editar/editar.module';



@NgModule({
    imports: [
        CommonModule,
        ListarModule,
        AdicionarModule,
        RemoverModule,
        EditarModule
    ],
    exports: [HomeComponent],
    declarations: [HomeComponent],
    providers: [],
})
export class HomeModule { }
