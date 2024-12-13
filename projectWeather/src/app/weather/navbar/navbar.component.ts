import { Component } from '@angular/core';
import { RouterModule} from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  template: `
  <nav class="navbar">
    <ul>
      <li><a routerLink="/">Home</a></li>
      <li><a routerLink="/clima">Clima</a></li>
      <li><a routerLink="/sobre">Sobre</a></li>
</ul>
  </nav>
  `
})
export class NavbarComponent {

}
