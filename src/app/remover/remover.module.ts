import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RemoverComponent } from './remover.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [RemoverComponent],
    declarations: [RemoverComponent],
    providers: [],
})
export class RemoverModule { }
