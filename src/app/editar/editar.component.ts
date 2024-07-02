import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ColaboradoresService, Colaborador } from '../colaboradores.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {
  colaborador: Colaborador = { id: 0, nome: '', cargo: '' };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private colaboradoresService: ColaboradoresService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.colaboradoresService.getColaborador(id).subscribe((data: Colaborador) => {
      this.colaborador = data;
    });
  }

  salvar() {
    this.colaboradoresService.atualizarColaborador(this.colaborador).subscribe(() => {
      this.router.navigate(['/listar']);
    });
  }
  
}
