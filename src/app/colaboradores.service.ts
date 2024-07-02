import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

export interface Colaborador {
  id: number;
  nome: string;
  cargo: string;
  selecionado?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ColaboradoresService {
  private apiUrl = 'http://localhost:3000/colaboradores';
  private colaboradoresSubject = new BehaviorSubject<Colaborador[]>([]);

  colaboradores$ = this.colaboradoresSubject.asObservable();

  constructor(private http: HttpClient) {
    this.atualizarListaColaboradores();
  }

  atualizarListaColaboradores() {
    this.http.get<Colaborador[]>(this.apiUrl).subscribe(colaboradores => {
      this.colaboradoresSubject.next(colaboradores);
    });
  }

  getColaboradores(): Observable<Colaborador[]> {
    return this.colaboradores$;
  }

  getColaborador(id: number): Observable<Colaborador> {
    return this.http.get<Colaborador>(`${this.apiUrl}/${id}`);
  }

  adicionarColaborador(colaborador: Colaborador): Observable<Colaborador> {
    return this.http.post<Colaborador>(this.apiUrl, colaborador, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).pipe(
      tap(() => this.atualizarListaColaboradores())
    );
  }

  atualizarColaborador(colaborador: Colaborador): Observable<Colaborador> {
    return this.http.put<Colaborador>(`${this.apiUrl}/${colaborador.id}`, colaborador, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).pipe(
      tap(() => this.atualizarListaColaboradores())
    );
  }

  removerColaborador(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      tap(() => this.atualizarListaColaboradores())
    );
  }
}

