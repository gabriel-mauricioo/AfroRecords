import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdicionarComponent } from './adicionar.component';
import { ColaboradoresService } from '../colaboradores.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
            
  ],
  exports: [AdicionarComponent],
  declarations: [AdicionarComponent],
  providers: [],
})
export class AdicionarModule { }
