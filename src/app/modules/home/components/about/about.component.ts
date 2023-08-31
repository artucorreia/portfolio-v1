import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  skills: string[] = [
    'HTML', 
    'CSS', 
    'JavaScript', 
    'GIT', 
    'GitHub', 
    'TypeScript', 
    'Angular', 
    'SCSS', 
    'SQL Oracle'
  ];

  describe: string = 'Aqui você vai encontrar mais informações sobre mim, o que eu faço atualmente, minhas metas, além de conhecer um pouco das minhas habilidades e tecnologias que domino';

  // quando iniciei a faculdade em anos
  startedCoursInYears: number = 2021.5;
  // o tempo que tenho de faculdade em anos
  collegeTimeInYears: number = ((new Date()).getFullYear() - this.startedCoursInYears);
  // transforma os anos em meses
  period: number = this.collegeTimeInYears/0.5;

  // ja estou formado???
  graduated:boolean = this.period > 8 ? true : false;
  // ano que vou finalizar 
  yearGraduated: number = (this.startedCoursInYears + 4) - 0.5;

  // minha meta atual
  currentGoal: string = 'A curto prazo minha meta é conseguir uma vaga de júnior trabalhando com framework Agular.';

  constructor() { }
}
