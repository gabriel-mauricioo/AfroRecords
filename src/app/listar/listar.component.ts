import { Component, OnInit } from '@angular/core';
import { ColaboradoresService, Colaborador } from '../colaboradores.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {
  colaboradores: Colaborador[] = [];

  constructor(private colaboradoresService: ColaboradoresService, private router: Router) {}

  ngOnInit() {
  this.colaboradoresService.colaboradores$.subscribe((data: Colaborador[]) => {
    this.colaboradores = data;
  });
}

  editarColaborador(id: number) {
    this.router.navigate(['/editar', id]);
  }
}
