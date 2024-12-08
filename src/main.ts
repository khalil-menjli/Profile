import { Component, OnInit, AfterViewInit } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { HeaderComponent } from './app/header/header.component';
import { AboutComponent } from './app/about/about.component';
import { EducationComponent } from './app/education/education.component';
import { ExperienceComponent } from './app/experience/experience.component';
import { ProjectsComponent } from './app/projects/projects.component';
import { SkillsComponent } from './app/skills/skills.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';
import AOS from 'aos';
declare var particlesJS: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    AboutComponent,
    EducationComponent,
    ExperienceComponent,
    ProjectsComponent,
    SkillsComponent
  ],
  template: `
    <div id="particles-js"></div>
    <div class="cursor"></div>
    <div class="cursor-dot"></div>
    <div class="app-container">
      <app-header></app-header>
      <main>
        <app-about></app-about>
        <app-education></app-education>
        <app-experience></app-experience>
        <app-projects></app-projects>
        <app-skills></app-skills>
      </main>
      <footer class="footer">
        <p class="glow-text">© 2024 Khalil Menjli | Full Stack Developer</p>
      </footer>
    </div>
  `,
  styles: [`
    .app-container {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      position: relative;
      z-index: 1;
    }
    main {
      flex: 1;
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
    }
    .footer {
      text-align: center;
      padding: 1.5rem;
      margin-top: 2rem;
      background: rgba(26, 26, 26, 0.8);
      backdrop-filter: blur(10px);
    }
  `]
})
export class App implements OnInit, AfterViewInit {
  ngOnInit() {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false
    });
  }

  ngAfterViewInit() {
    this.initParticles();
    this.initCustomCursor();
  }

  private initParticles() {
    particlesJS('particles-js', {
      particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: '#00ff9d' },
        shape: { type: 'circle' },
        opacity: {
          value: 0.5,
          random: false,
          animation: { enable: true, speed: 1, minimumValue: 0.1, sync: false }
        },
        size: {
          value: 3,
          random: true,
          animation: { enable: true, speed: 2, minimumValue: 0.1, sync: false }
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: '#00ccff',
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 2,
          direction: 'none',
          random: false,
          straight: false,
          outModes: { default: 'bounce' },
          attract: { enable: false, rotateX: 600, rotateY: 1200 }
        }
      },
      interactivity: {
        detectsOn: 'canvas',
        events: {
          onHover: { enable: true, mode: 'repulse' },
          onClick: { enable: true, mode: 'push' },
          resize: true
        },
        modes: {
          repulse: { distance: 100, duration: 0.4 },
          push: { particles_nb: 4 }
        }
      },
      retina_detect: true
    });
  }

  private initCustomCursor() {
    const cursor = document.querySelector('.cursor') as HTMLElement;
    const cursorDot = document.querySelector('.cursor-dot') as HTMLElement;

    document.addEventListener('mousemove', (e) => {
      cursor.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
      cursorDot.style.transform = `translate(${e.clientX - 2}px, ${e.clientY - 2}px)`;
    });

    document.addEventListener('mousedown', () => {
      cursor.style.transform += ' scale(0.8)';
    });

    document.addEventListener('mouseup', () => {
      cursor.style.transform = cursor.style.transform.replace(' scale(0.8)', '');
    });
  }
}

bootstrapApplication(App, {
  providers: [
    importProvidersFrom(BrowserAnimationsModule)
  ]
}).catch(err => console.error(err));