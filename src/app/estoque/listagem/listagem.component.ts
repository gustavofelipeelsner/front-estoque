import { Component, OnInit } from '@angular/core';
import { EstoqueService } from '../estoque.service';
import { Estoque } from '../estoque.model';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-listagem',
  imports: [CommonModule, RouterLink],
  templateUrl: './listagem.component.html',
  styleUrl: './listagem.component.css'
})
export class ListagemComponent implements OnInit{

estoques : Estoque[] = [];
constructor(private estoqueService: EstoqueService){}


  ngOnInit(): void {
  this.carregarEstoque();
  }
  carregarEstoque(): void{
  this.estoqueService.listarEstoque().subscribe((res) => {
  this.estoques = res;
  }
  );
  }
}


