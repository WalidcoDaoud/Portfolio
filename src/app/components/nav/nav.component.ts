import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule],
  providers: [ScrollService],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.sass',
})
export class NavComponent {
  navItems = [
    {
      name: 'Home',
      href: '#header',
    },
    {
      name: 'About',
      href: '#about',
    },
    {
      name: 'Skills',
      href: '#skills',
    },
    // {
    //   name: 'Projects',
    //   href: '#projects',
    // },
    {
      name: 'Contact',
      href: '#contact',
    },
  ];
  // darkMode = false;
  isMenuOpen = false;

  constructor(private scrollService: ScrollService) {}

  scrollWithOffset(event: Event, href: string): void {
    event.preventDefault();
    const elementId = href.replace('#', '');
    const extraOffset = 0;
    this.scrollService.scrollToElementById(elementId, extraOffset);
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  // toggleTheme() {
  //   this.darkMode = !this.darkMode
  //   document.body.classList.toggle('dark-mode', this.darkMode);
  // }
}
