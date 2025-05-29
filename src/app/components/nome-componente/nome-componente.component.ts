import { Component } from '@angular/core';

@Component({
  selector: 'app-nome-componente',
  imports: [],
  standalone : true,
  templateUrl: './nome-componente.component.html',
  styleUrl: './nome-componente.component.css'
})
export class NomeComponenteComponent {
  nome: string = "Bianca";
  profissao: string = "Desenvolvedora Web";
  hobbies: string [] = ["Viajar", "Ler", "Assistir séries", "Jogar beach tennis"]


}
