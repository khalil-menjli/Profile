import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  icon: string;
  color: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="section">
      <h2 class="section-title" data-aos="fade-down">Technical Skills</h2>
      <div class="skills-container">
        <div class="skill-category" data-aos="fade-up">
          <h3>Programming Languages</h3>
          <div class="skills-grid">
            <div class="skill-item" *ngFor="let skill of programmingLanguages; let i = index"
                 [attr.data-aos]="'zoom-in'"
                 [attr.data-aos-delay]="i * 100">
              <i [class]="skill.icon" [style.color]="skill.color"></i>
              <span>{{ skill.name }}</span>
            </div>
          </div>
        </div>

        <div class="skill-category" data-aos="fade-up" data-aos-delay="200">
          <h3>Frameworks</h3>
          <div class="skills-grid">
            <div class="skill-item" *ngFor="let skill of frameworks; let i = index"
                 [attr.data-aos]="'zoom-in'"
                 [attr.data-aos-delay]="i * 100">
              <i [class]="skill.icon" [style.color]="skill.color"></i>
              <span>{{ skill.name }}</span>
            </div>
          </div>
        </div>

        <div class="skill-category" data-aos="fade-up" data-aos-delay="400">
          <h3>Tools & Technologies</h3>
          <div class="skills-grid">
            <div class="skill-item" *ngFor="let skill of tools; let i = index"
                 [attr.data-aos]="'zoom-in'"
                 [attr.data-aos-delay]="i * 100">
              <i [class]="skill.icon" [style.color]="skill.color"></i>
              <span>{{ skill.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .section-title {
      font-size: 2.5rem;
      text-align: center;
      margin-bottom: 3rem;
      background: var(--gradient);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .skills-container {
      display: flex;
      flex-direction: column;
      gap: 3rem;
    }

    .skill-category {
      background: rgba(26, 26, 26, 0.8);
      border-radius: 16px;
      padding: 2rem;
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .skill-category h3 {
      font-size: 1.5rem;
      margin-bottom: 1.5rem;
      color: var(--primary-color);
    }

    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
      gap: 1.5rem;
    }

    .skill-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
      padding: 1rem;
      background: rgba(0, 0, 0, 0.2);
      border-radius: 12px;
      transition: all 0.3s ease;
    }

    .skill-item:hover {
      transform: translateY(-5px);
      background: rgba(0, 0, 0, 0.4);
      box-shadow: 0 5px 15px rgba(0, 255, 157, 0.2);
    }

    .skill-item i {
      font-size: 2rem;
      margin-bottom: 0.5rem;
    }

    .skill-item span {
      font-size: 0.9rem;
      text-align: center;
    }

    @media (max-width: 768px) {
      .skills-grid {
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
      }
    }
  `]
})
export class SkillsComponent {
  programmingLanguages: Skill[] = [
    { name: 'Java', icon: 'fab fa-java', color: '#f89820' },
    { name: 'JavaScript', icon: 'fab fa-js-square', color: '#f7df1e' },
  ];

  frameworks: Skill[] = [
    { name: 'Angular', icon: 'fab fa-angular', color: '#dd0031' },
    { name: 'React', icon: 'fab fa-react', color: '#61dafb' },
    { name: 'Spring', icon: 'fas fa-leaf', color: '#6db33f' },
    { name: 'Symfony', icon: 'fab fa-symfony', color: '#000000' },
    { name: 'Android', icon: 'fab fa-android', color: '#3ddc84' },
  ];

  tools: Skill[] = [
    { name: 'Git', icon: 'fab fa-git-alt', color: '#f05032' },
    { name: 'GitHub', icon: 'fab fa-github', color: '#ffffff' },
    { name: 'MySQL', icon: 'fas fa-database', color: '#4479a1' },
    { name: 'Scrum', icon: 'fas fa-users-gear', color: '#009FDA' },
    { name: 'UML', icon: 'fas fa-diagram-project', color: '#FFA500' },
  ];
}