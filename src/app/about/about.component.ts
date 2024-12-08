import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section class="section">
      <div class="card glass-effect" data-aos="fade-up">
        <h2>About Me</h2>
        <p class="about-text">
          Passionate about web development and innovative technologies, I constantly seek to develop my skills and stay at the forefront of the latest tools and practices. My goal is to contribute to impactful projects and transform ideas into value-creating solutions.
        </p>
        <div class="tech-stack" data-aos="fade-up" data-aos-delay="200">
          <div class="tech-item">Angular</div>
          <div class="tech-item">Java</div>
          <div class="tech-item">Spring Boot</div>
          <div class="tech-item">React</div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    h2 {
      font-size: 2rem;
      margin-bottom: 1.5rem;
      background: var(--gradient);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .about-text {
      font-size: 1.1rem;
      line-height: 1.8;
      margin-bottom: 2rem;
    }
    .tech-stack {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      margin-top: 1.5rem;
    }
    .tech-item {
      background: var(--gradient);
      color: var(--white);
      padding: 0.5rem 1rem;
      border-radius: 20px;
      font-size: 0.9rem;
      transition: transform 0.3s ease;
    }
    .tech-item:hover {
      transform: translateY(-2px);
    }
  `]
})
export class AboutComponent {}