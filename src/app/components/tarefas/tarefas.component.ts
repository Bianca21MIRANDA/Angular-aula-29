import { Component, inject } from '@angular/core';
import {TarefasService} from '../../services/tarefas.service';
import {Tarefas} from '../../interfaces/Tarefas';

@Component({
  selector: 'app-tarefas',
  imports: [],
  standalone: true,
  templateUrl: './tarefas.component.html',
  styleUrl: './tarefas.component.css'
})
export class TarefasComponent {
  private tarefasServico = inject(TarefasService);
  listaTarefas: Tarefas[] = [];
  ngOnInit(){
    this.listaTarefas = this.tarefasServico.getTarefas();
  }
toggleConcluido(tarefa:Tarefas){
    tarefa.concluido = !tarefa.concluido;

}
}
