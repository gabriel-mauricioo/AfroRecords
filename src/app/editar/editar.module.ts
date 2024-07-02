import { NgModule } from '@angular/core';


import { EditarComponent } from './editar.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, FormsModule],
    exports: [EditarComponent],
    declarations: [EditarComponent],
    providers: [],
})
export class EditarModule { }
