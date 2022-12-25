import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  showMenu(): void {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile) {
      if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document
          .querySelector('.icon')
          ?.setAttribute('src', 'assets/static/img/open_menu.svg');
      } else {
        menuMobile.classList.add('open');
        document
          .querySelector('.icon')
          ?.setAttribute('src', 'assets/static/img/close_menu.svg');
      }
    }
  }
}
