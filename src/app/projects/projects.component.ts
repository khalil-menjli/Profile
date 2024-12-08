import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
  image?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="projects" class="section">
      <h2 class="section-title" data-aos="fade-down">Featured Projects</h2>
      <div class="projects-grid">
        <div *ngFor="let project of projects; let i = index" 
             class="project-card card"
             [attr.data-aos]="'fade-up'"
             [attr.data-aos-delay]="i * 100">
          <div class="project-content">
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            <div class="tech-stack">
              <span *ngFor="let tech of project.technologies" class="tech-tag">
                {{ tech }}
              </span>
            </div>
            <div class="project-links">
              <a *ngIf="project.github" [href]="project.github" target="_blank" class="project-link">
                <i class="fab fa-github"></i> Code
              </a>
              <a *ngIf="project.demo" [href]="project.demo" target="_blank" class="project-link">
                <i class="fas fa-external-link-alt"></i> Demo
              </a>
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

    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .project-card {
      height: 100%;
      transition: all 0.3s ease;
    }

    .project-card:hover {
      transform: translateY(-10px);
    }

    .project-content {
      height: 100%;
      display: flex;
      flex-direction: column;
    }

    h3 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
      color: var(--primary-color);
    }

    .tech-stack {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin: 1rem 0;
    }

    .tech-tag {
      background: rgba(0, 255, 157, 0.1);
      color: var(--primary-color);
      padding: 0.3rem 0.8rem;
      border-radius: 15px;
      font-size: 0.8rem;
    }

    .project-links {
      margin-top: auto;
      display: flex;
      gap: 1rem;
    }

    .project-link {
      color: var(--text);
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      transition: color 0.3s ease;
    }

    .project-link:hover {
      color: var(--primary-color);
    }
  `]
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Book Social Network',
      description: 'A web application for managing social interactions around books',
      technologies: ['Spring Boot', 'React', 'MySQL'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Checkin-pro',
      description: 'Employee tracking application with comprehensive management features',
      technologies: ['Android', 'React', 'Spring Boot', 'MySQL'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Books Manager',
      description: 'Web application for efficient book management and organization',
      technologies: ['Angular', 'RESTful API'],
      github: '#',
      demo: '#'
    },
    {
      title: 'E-Vote',
      description: 'Secure online voting application with real-time results',
      technologies: ['Symfony', 'MySQL'],
      github: '#',
      demo: '#'
    }
  ];
}