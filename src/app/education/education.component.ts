import { Component } from '@angular/core';
import { TimelineComponent, TimelineItem } from '../shared/timeline/timeline.component';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [TimelineComponent],
  template: `
    <section class="section">
      <h2 class="section-title" data-aos="fade-down">Education</h2>
      <app-timeline [items]="educationItems"></app-timeline>
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
export class EducationComponent {
  educationItems: TimelineItem[] = [
    {
      title: 'Développement Systèmes informatique',
      subtitle: 'Institut Supérieur des Etudes Technologiques de Beja',
      date: '2022 - Present',
      description: [
        'Specialized in Software Systems Development',
        'Focus on modern web technologies and software engineering practices'
      ]
    },
    {
      title: 'Baccalauréat en Sciences Technique',
      subtitle: 'Lycée Sportif/Technique De la Manouba',
      date: '2021 - 2022',
      description: [
        'Technical Sciences specialization',
        'Foundation in technical and analytical skills'
      ]
    }
  ];
}