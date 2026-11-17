import { Component } from '@angular/core';
import { Header } from './header/header';
import { ProfileCard } from './profile-card/profile-card';
import { Skills } from './skills/skills';
import { Footer } from './footer/footer';
import { Proficiency } from './proficiency';

@Component({
  selector: 'app-root',
  imports: [Header, ProfileCard, Skills, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  fullName = 'Daniel D. Manabat';
  location = 'City of San Fernando, Pampanga';
  email = 'danielmanabat27@gmail.com';
  phone = '0920 229 9595';

  profile = 'I am a student interested in web development, but I also like to dabble in different IT specializations such as networking and databases for my future career. If I were to be asked which role I would like to take in a team, I want to be database designer or administrator, or a backend developer in general. I know that being one of either frontend or backend isn\'t enough, so someday I also aim to be a Fullstack Developer. I am someone who you can trust to be diligent and eager to develop new skills in order to adapt to any type of work.';

  skills = [
    'HTML and CSS',
    'JavaScript',
    'TypeScript',
    'Angular',
    'Python',
    'Java',
    'UI/UX',
    'Networking',
    'Database Design',
    'Project Management',
    'System Development',
    'Problem-Solving'
  ];

  proficiencies: Proficiency[] = [
    { tool: 'Visual Studio Code', level: 'Advanced' },
    { tool: 'Git and GitHub', level: 'Intermediate' },
    { tool: 'Node.js and npm', level: 'Intermediate' },
    { tool: 'Angular CLI', level: 'Beginner' }
  ];

 message = 'Click any skill above to select it.';

  // Runs when the Skills component emits a skillSelected event.
  onSkillSelected(skill: string) {
    this.message = `You selected: ${skill}`;
  }
}
