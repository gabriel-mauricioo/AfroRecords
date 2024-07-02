import { Component, OnInit } from '@angular/core';
import { ColaboradoresService, Colaborador } from '../colaboradores.service';

@Component({
  selector: 'app-remover',
  templateUrl: './remover.component.html',
  styleUrls: ['./remover.component.scss']
})
export class RemoverComponent implements OnInit {
  colaboradores: Colaborador[] = [];

  constructor(private colaboradoresService: ColaboradoresService) {}

  ngOnInit() {
    this.colaboradoresService.colaboradores$.subscribe((data: Colaborador[]) => {
      this.colaboradores = data;
    });
  }

  removerColaboradores() {
    const idsParaRemover = this.colaboradores
      .filter(colaborador => colaborador.selecionado)
      .map(colaborador => colaborador.id);
  
    idsParaRemover.forEach(id => {
      this.colaboradoresService.removerColaborador(id).subscribe();
    });
  }
}
