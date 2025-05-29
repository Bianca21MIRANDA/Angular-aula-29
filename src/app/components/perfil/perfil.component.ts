import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-perfil',
  imports: [FormsModule],
  standalone:true,
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent {
  nome: string = '';
  perfil = {
    username: "bia21",
    nome: "Bianca Conrado",
    local: "Manaus",
    idade: 26,
    profissao: "Desenvolvedora Web",
    empresa: "Fpf",
    publicacoes: 11,
    seguidores: 1756,
    seguindo: 1000,
    foto: "https://blog.kxptech.com/wp-content/uploads/2023/08/Desenvolvedora-de-software-full-stack-corrigindo-erros-de-aplicativo-1024x683.jpg"
  }

}
