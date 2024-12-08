import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="navbar glass-effect" data-aos="fade-down">
      <div class="nav-content">
        <div class="logo">KM</div>
        <ul class="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a routerLink="/blog">Blog</a></li>
        </ul>
      </div>
    </nav>

    <header class="header glass-effect">
      <div class="header-content" data-aos="fade-down">
        <h1 class="floating">Khalil Menjli</h1>
        <p class="subtitle" data-aos="fade-up" data-aos-delay="200">
          Full Stack Angular & Java Developer
        </p>
        <div class="social-links" data-aos="fade-up" data-aos-delay="300">
          <a href="https://linkedin.com/in/khalil-menjli" target="_blank" class="social-link">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/khalil-menjli" target="_blank" class="social-link">
            <i class="fab fa-github"></i>
          </a>
        </div>
        <div class="cta-buttons" data-aos="fade-up" data-aos-delay="400">
          <a href="/path-to-your-cv.pdf" download class="btn-primary">
            <i class="fas fa-download"></i> Download CV
          </a>
          <a href="mailto:menjlikhalyl@gmail.com" class="btn-primary">
            <i class="fas fa-envelope"></i> Contact Me
          </a>
        </div>
        <div class="contact-info" data-aos="fade-up" data-aos-delay="500">
          <a href="tel:55127051" class="contact-item">
            <i class="fas fa-phone"></i>
            55 127 051
          </a>
          <div class="contact-item">
            <i class="fas fa-map-marker-alt"></i>
            Manouba, Tunisia
          </div>
        </div>
      </div>
    </header>
  `,
  styles: [`
    .navbar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      padding: 1rem 2rem;
      background: rgba(26, 26, 26, 0.8);
      backdrop-filter: blur(10px);
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    .nav-content {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo {
      font-size: 1.5rem;
      font-weight: 700;
      background: var(--gradient);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .nav-links {
      display: flex;
      gap: 2rem;
      list-style: none;
    }

    .nav-links a {
      color: var(--text);
      text-decoration: none;
      font-weight: 500;
      transition: all 0.3s ease;
      position: relative;
    }

    .nav-links a::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 0;
      height: 2px;
      background: var(--gradient);
      transition: width 0.3s ease;
    }

    .nav-links a:hover::after {
      width: 100%;
    }

    .header {
      margin-top: 4rem;
      background: rgba(26, 26, 26, 0.8);
      color: var(--text);
      padding: 6rem 2rem;
      text-align: center;
      position: relative;
      overflow: hidden;
    }

    .header-content {
      max-width: 800px;
      margin: 0 auto;
      position: relative;
      z-index: 1;
    }

    h1 {
      font-size: 3.5rem;
      font-weight: 700;
      margin-bottom: 1rem;
      background: var(--gradient);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .subtitle {
      font-size: 1.5rem;
      margin-bottom: 2rem;
      opacity: 0.9;
    }

    .social-links {
      display: flex;
      justify-content: center;
      gap: 1.5rem;
      margin-bottom: 2rem;
    }

    .social-link {
      font-size: 1.5rem;
      color: var(--text);
      transition: all 0.3s ease;
    }

    .social-link:hover {
      color: var(--primary-color);
      transform: translateY(-3px);
    }

    .cta-buttons {
      display: flex;
      justify-content: center;
      gap: 1.5rem;
      margin-bottom: 2rem;
    }

    .contact-info {
      display: flex;
      justify-content: center;
      gap: 2rem;
    }

    .contact-item {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: var(--text);
      text-decoration: none;
      transition: all 0.3s ease;
    }

    .contact-item:hover {
      color: var(--primary-color);
    }

    @media (max-width: 768px) {
      .nav-links {
        display: none;
      }

      .cta-buttons {
        flex-direction: column;
        align-items: center;
      }

      .contact-info {
        flex-direction: column;
        align-items: center;
      }
    }
  `]
})
export class HeaderComponent {}