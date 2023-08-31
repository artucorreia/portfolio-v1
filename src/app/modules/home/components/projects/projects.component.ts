import { Component } from '@angular/core';
import { Project } from '../../model/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projectList: Project[] = [
    {
      title: 'calculadora', 
      img: '../../../../../assets/jpeg/calculadora.jpg', 
      imgAlt: 'projeto calculadora',
      about: 'Calculadora feita usando apenas HTML, CSS e JavaScript. Possui as quatro operações básicas', 
      linkGitHub: 'https://github.com/artucorreia/calculadora',
      linkWeb: 'https://artucorreia.github.io/calculadora/'
    },
    {
      title: 'to-do list angular', 
      img: '../../../../../assets/jpeg/todo-list-angular.jpg', 
      imgAlt: 'projeto to-do list Angular',
      about: 'Lista de tarefas, feita com o framework Angular. Possui as opções de marcar tarefa como feita, deletar tarefas e também de edita-las, também possui localStorage', 
      linkGitHub: 'https://github.com/artucorreia/app-todo-list',
      linkWeb: 'https://artucorreia.github.io/app-todo-list/'
    },
    {
      title: 'to-do list js', 
      img: '../../../../../assets/jpeg/todo-list-js.jpg', 
      imgAlt: 'projeto to-do list JS' ,
      about: 'Lista de tarefas fieta utilizando HTML, CSS, JavaScript e Bootstrap. O usuário pode editar suas tarefas, marcar como feita e também deletar, nesses casos as tarefas vão para suas páginas correspondentes "concluidas" ou "deletadas". Possui localStorage', 
      linkGitHub: 'https://github.com/artucorreia/lista-tarefas',
      linkWeb: 'https://artucorreia.github.io/lista-tarefas/'
    }
  ];
  describe: string = 'Aqui você vai encontrar alguns dos meus projetos mais legais';
  constructor() { }

}
