import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EstoqueService } from '../estoque.service';
import { Estoque } from '../estoque.model';

@Component({
  selector: 'app-edicao',
  imports: [CommonModule, FormsModule],
  templateUrl: './edicao.component.html',
  styleUrl: './edicao.component.css'
})
export class EdicaoComponent implements OnInit {

estoque: Estoque = {
  id: 0,
  nome: '',
  quantidadeAtual:0,
  tamPedido:0,
  quantidadeAdd:0,
  dataPedido: new Date(),
  quantidadeMinima:0,
};
private id!: number;


  constructor(
  private route:ActivatedRoute,
  private router: Router,
  private estoqueService: EstoqueService
  ){}

  ngOnInit(): void {
  this.id = Number(this.route.snapshot.paramMap.get('id'))
}

carregarEstoque(): void{
if(!this.id){
  this.router.navigate(['/listagem']);
return;
}

this.estoqueService.buscarEstoque(this.id).subscribe((a) => {
this.estoque = a;
})
}

salvar(): void {
if(!this.estoque) return;
this.estoqueService.atualizarEstoque(this.id, this.estoque).subscribe((a) => {
this.router.navigate(['/listagem']);
})

}
}
