import { Routes } from '@angular/router';
import {NomeComponenteComponent} from './components/nome-componente/nome-componente.component';
import {PerfilComponent} from './components/perfil/perfil.component';
import {ProdutosComponent} from './components/produtos/produtos.component';

export const routes: Routes = [
  {path: 'nome', component: NomeComponenteComponent},
  {path: 'perfil', component: PerfilComponent},
  {path: 'produtos', component: ProdutosComponent},
  {path: '**', redirectTo: 'nome'}
];
