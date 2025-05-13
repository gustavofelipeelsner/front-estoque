import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estoque } from './estoque.model';
@Injectable({
  providedIn: 'root'
})
export class EstoqueService {
private apiURL ='http://localhost:3000/estoque';
  constructor(private http: HttpClient) { }

listarEstoque(): Observable<Estoque[]>{ 
return this.http.get<Estoque[]>(this.apiURL);
}

cadastrarEstoque(estoque: Estoque): Observable<Estoque>{
return this.http.post<Estoque>(this.apiURL, estoque);
}

buscarEstoque(id: number): Observable<Estoque>{
return this.http.get<Estoque>(`${this.apiURL}/${id}`)
}

atualizarEstoque(id: number, estoque:Estoque): Observable<Estoque>{
return this.http.patch<Estoque>(`${this.apiURL}/${id}`, estoque);
}

deletarEstoque(id: number): Observable<void>{
return this.http.delete<void>(`${this.apiURL}/${id}`);
}
}
