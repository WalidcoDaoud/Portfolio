import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  scrollToElementById(id: string, extraOffset: number = 0): void {
    const element = this.document.getElementById(id);
    if (element) {
      const baseOffset = 80;
      const totalOffset = baseOffset + extraOffset;

      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - totalOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
}
