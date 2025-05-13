import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Estoque } from '../estoque.model';
import { CommonModule } from '@angular/common';
import { EstoqueService } from '../estoque.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  imports: [CommonModule, FormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
estoque: Estoque = {
id: 0,
nome: '',
quantidadeAtual:0,
tamPedido:0,
quantidadeAdd:0,
dataPedido: new Date(),
quantidadeMinima:0,
};

constructor(
private estoqueService: EstoqueService,
private router : Router
) {}

salvar(){
this.estoqueService.cadastrarEstoque(this.estoque).subscribe(() => {
this.router.navigate(['/listagem']);
});
}
}

