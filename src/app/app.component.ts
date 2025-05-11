import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/sections/header/header.component";
import { AboutComponent } from "./components/sections/about/about.component";
import { SkillsComponent } from "./components/sections/skills/skills.component";
import { ProjectsComponent } from "./components/sections/projects/projects.component";
import { ContactComponent } from "./components/sections/contact/contact.component";
import { FooterComponent } from "./components/footer/footer.component";
import { NavComponent } from "./components/nav/nav.component";

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent,
    NavComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
}
