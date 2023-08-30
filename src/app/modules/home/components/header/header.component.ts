import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  display: string = 'none';
  menuOpen: boolean = false;

  constructor() { }

  displayMenu() {
    if (this.menuOpen) {
      this.menuOpen = false;
      this.display = 'none';
    } else {
      this.menuOpen = true;
      this.display = 'block';
    }
  }
}
