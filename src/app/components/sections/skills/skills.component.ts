import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.sass'
})
export class SkillsComponent {
  technicalSkills = [
    { name: 'HTML & CSS', level: 100 },
    { name: 'JavaScript', level: 100 },
    { name: 'TypeScript', level: 90 },
    { name: 'React', level: 90 },
    { name: 'Angular', level: 90 },
    { name: 'C#', level: 60 },
    { name: 'Sass / SCSS', level: 100},
    { name: 'Material UI', level: 70},
    { name: 'Node.js', level: 50},
    { name: 'Bootstrap', level: 70},
    { name: 'RESTful APIs', level: 70},
    { name: 'SQL Server Management Studio', level: 70},
    { name: 'MongoDB', level: 70},
    { name: 'Azure', level: 70},
    { name: 'CI/CD', level: 80},
  ];
}
