import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  imports: [CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.sass'
})
export class NavComponent {

  darkMode = false;

  navItems = [
    {
      name: 'Home',
      href: '#',
    },
    {
      name: 'About',
      href: '#about',
    },
    {
      name: 'Skills',
      href: '#skills',
    },
    {
      name: 'Projects',
      href: '#projects',
    },
    {
      name: 'Contact',
      href: '#contact',
    },
  ]

  // toggleTheme() {
  //   this.darkMode = !this.darkMode
  //   document.body.classList.toggle('dark-mode', this.darkMode);
  // }
}
