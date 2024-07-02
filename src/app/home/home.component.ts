import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {


  selecaoAtual: string = '';

  mostrarSecao(secao: string){
    this.selecaoAtual = secao;
  }
  // exibirListar: boolean = false;

  // mostrarListar() {
  //   this.exibirListar = true;
  // }

  // exibirAdicionar:boolean = false;

  // mostrarAdicionar() {
  //   this.exibirAdicionar = true;
  // }


}
