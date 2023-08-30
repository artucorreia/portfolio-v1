import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  display: string = 'block';
  menuOpen: boolean = false;

  constructor() { }

  displayMenu() {

  }
}
