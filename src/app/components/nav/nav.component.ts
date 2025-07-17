import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule],
  providers: [ScrollService],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.sass',
})
export class NavComponent implements OnInit{

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

  isDarkMode = true;
  isMenuOpen = false;

  constructor(private scrollService: ScrollService) {}

  ngOnInit(): void {
    const savedMode = localStorage.getItem('darkMode');
    this.isDarkMode = savedMode ? savedMode === 'true' : true;

    this.updateBodyClass();
  }

  scrollWithOffset(event: Event, href: string): void {
    event.preventDefault();
    const elementId = href.replace('#', '');
    const extraOffset = 0;
    this.scrollService.scrollToElementById(elementId, extraOffset);
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('darkMode', this.isDarkMode.toString());

    this.updateBodyClass();
  }

  private updateBodyClass() {
    if (this.isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }
}
