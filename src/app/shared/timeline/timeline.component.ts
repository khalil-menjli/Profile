import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface TimelineItem {
  title: string;
  subtitle: string;
  date: string;
  description?: string[];
}

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="timeline">
      <div class="timeline-line"></div>
      <div class="timeline-items">
        <div 
          *ngFor="let item of items; let i = index" 
          class="timeline-item"
          [class.timeline-item-right]="i % 2 === 1"
          [attr.data-aos]="i % 2 === 0 ? 'fade-right' : 'fade-left'"
          [attr.data-aos-delay]="i * 100"
        >
          <div class="timeline-content card">
            <div class="timeline-dot"></div>
            <h3>{{ item.title }}</h3>
            <h4>{{ item.subtitle }}</h4>
            <p class="timeline-date">{{ item.date }}</p>
            <ul *ngIf="item.description && item.description.length > 0">
              <li *ngFor="let desc of item.description">{{ desc }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .timeline {
      position: relative;
      padding: 2rem 0;
    }

    .timeline-line {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      width: 2px;
      height: 100%;
      background: var(--gradient);
      top: 0;
    }

    .timeline-items {
      max-width: 1200px;
      margin: 0 auto;
      position: relative;
    }

    .timeline-item {
      width: 50%;
      padding: 2rem;
      position: relative;
    }

    .timeline-item:nth-child(odd) {
      padding-right: 3rem;
      text-align: right;
    }

    .timeline-item-right {
      margin-left: 50%;
      padding-left: 3rem;
      text-align: left;
    }

    .timeline-content {
      position: relative;
      padding: 1.5rem;
      transition: all 0.3s ease;
    }

    .timeline-content:hover {
      transform: translateY(-5px);
    }

    .timeline-dot {
      position: absolute;
      width: 20px;
      height: 20px;
      background: var(--gradient);
      border-radius: 50%;
      top: 50%;
      transform: translateY(-50%);
    }

    .timeline-item:nth-child(odd) .timeline-dot {
      right: -43px;
    }

    .timeline-item-right .timeline-dot {
      left: -43px;
    }

    h3 {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
      background: var(--gradient);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    h4 {
      font-size: 1.1rem;
      color: var(--text-secondary);
      margin-bottom: 0.5rem;
    }

    .timeline-date {
      font-size: 0.9rem;
      color: var(--primary-color);
      margin-bottom: 1rem;
    }

    ul {
      list-style-type: none;
      padding: 0;
    }

    li {
      margin: 0.5rem 0;
      position: relative;
      padding-left: 1.5rem;
    }

    li::before {
      content: "▹";
      position: absolute;
      left: 0;
      color: var(--primary-color);
    }

    @media (max-width: 768px) {
      .timeline-line {
        left: 0;
      }

      .timeline-item {
        width: 100%;
        padding: 1rem 1rem 1rem 3rem !important;
        text-align: left !important;
        margin-left: 0 !important;
      }

      .timeline-dot {
        left: -11px !important;
      }
    }
  `]
})
export class TimelineComponent {
  @Input() items: TimelineItem[] = [];
}