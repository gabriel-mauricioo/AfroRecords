import { Component } from '@angular/core';
import { ColaboradoresService, Colaborador } from '../colaboradores.service';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.scss']
})
export class AdicionarComponent {
  nome: string = '';
  cargo: string = '';

  constructor(private colaboradoresService: ColaboradoresService) {}

  adicionarColaborador() {
  if (this.nome && this.cargo) {
    const novoColaborador: Colaborador = { id: Date.now(), nome: this.nome, cargo: this.cargo };
    this.colaboradoresService.adicionarColaborador(novoColaborador).subscribe(
      () => {
        this.resetForm();
      },
      (error) => {
        console.error('Erro ao adicionar colaborador:', error);
      }
    );
  }
}


  resetForm() {
    this.nome = '';
    this.cargo = '';
  }
}
