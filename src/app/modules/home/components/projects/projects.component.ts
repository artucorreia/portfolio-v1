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
      title: 'titulo projeto 1', 
      img: '#', 
      imgAlt: 'alt projeto 1',
      about: 'descrição do projeto 1', 
      loading: false
    },
    {
      title: 'titulo projeto 2', 
      img: '#', 
      imgAlt: 'alt projeto 2',
      about: 'descrição do projeto 2', 
      loading: true
    },
    {
      title: 'titulo projeto 3', 
      img: '#', 
      imgAlt: 'alt projeto 3' ,
      about: 'descrição do projeto 3', 
      loading: false
    }
  ];

  constructor() { }

}
