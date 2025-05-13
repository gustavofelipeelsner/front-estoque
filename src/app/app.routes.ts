import { Routes } from '@angular/router';
import { ListagemComponent} from './estoque/listagem/listagem.component';
import { CadastroComponent } from './estoque/cadastro/cadastro.component';
import { EdicaoComponent } from './estoque/edicao/edicao.component';
export const routes: Routes = [
{path:'', redirectTo: 'listagem', pathMatch: 'full'},
{path: 'listagem', component:ListagemComponent},
{path: 'cadastro', component:CadastroComponent},
{path: 'edicao/:id', component:EdicaoComponent},
];
