import { Component } from '@angular/core';
import { TimelineComponent, TimelineItem } from '../shared/timeline/timeline.component';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [TimelineComponent],
  template: `
    <section class="section">
      <h2 class="section-title" data-aos="fade-down">Professional Experience</h2>
      <app-timeline [items]="experienceItems"></app-timeline>
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
  `]
})
export class ExperienceComponent {
  experienceItems: TimelineItem[] = [
    {
      title: 'Software Development Intern',
      subtitle: 'SQLI Services',
      date: 'February 2024 - March 2024',
      description: [
        'Full-stack development using modern technologies',
        'Collaboration with development teams on enterprise projects',
        'Implementation of best practices and coding standards',
        'Developed a tourist guide platform using Symfony and MySQL'
      ]
    },
    {
      title: 'Technical Intern',
      subtitle: 'INSTITUT DE PRESSE ET DES SCIENCES DE L\'INFORMATION',
      date: 'February 2023 - March 2023',
      description: [
        
        'Performed hardware diagnostics and component replacement',
        'Managed software installations, updates, and troubleshooting'
      ]
    }
  ];
}