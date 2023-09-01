import { Component } from '@angular/core';
import { Skill } from '../../model/skill';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  skills: Skill[] = [
    {
      name: 'HTML', 
      logo: 'assets/png/html5.png'
    },
    {
      name: 'CSS', 
      logo: 'assets/png/css3.png'
    },
    {
      name: 'JavaScript', 
      logo: 'assets/png/javascript.png'
    },
    {
      name: 'GIT', 
      logo: 'assets/png/git.png'
    },
    {
      name: 'GitHub', 
      logo: 'assets/png/github.png'
    },
    {
      name: 'TypeScript', 
      logo: 'assets/png/typescript.png'
    },
    {
      name: 'Angular', 
      logo: 'assets/png/angular.png'
    },
    {
      name: 'SCSS', 
      logo: 'assets/png/sass.png'
    },
    {
      name: 'SQL Oracle', 
      logo: 'assets/png/oracle.png'
    },
  ]

  mouseHover: boolean = false;

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
