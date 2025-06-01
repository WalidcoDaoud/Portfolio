import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.sass',
})
export class SkillsComponent {
  technicalSkills = [
    { name: 'HTML & CSS', level: 'Advanced' },
    { name: 'JavaScript', level: 'Advanced' },
    { name: 'TypeScript', level: 'Advanced' },
    { name: 'React', level: 'Advanced' },
    { name: 'Angular', level: 'Advanced' },
    { name: 'C#', level: 'Intermediate' },
    { name: '.NET', level: 'Intermediate' },
    { name: 'Sass / SCSS', level: 'Advanced' },
    { name: 'Material UI', level: 'Intermediate' },
    { name: 'Node.js', level: 'Basic' },
    { name: 'Bootstrap', level: 'Intermediate' },
    { name: 'RESTful APIs', level: 'Intermediate' },
    { name: 'SQL Server', level: 'Intermediate' },
    { name: 'MongoDB', level: 'Intermediate' },
    { name: 'Azure', level: 'Intermediate' },
    { name: 'CI/CD', level: 'Intermediate' },
  ];

  getSkillWidth(level: string): string {
    switch (level.toLowerCase()) {
      case 'basic':
        return '40%';
      case 'intermediate':
        return '70%';
      case 'advanced':
        return '90%';
      default:
        return '0%';
    }
  }
}
