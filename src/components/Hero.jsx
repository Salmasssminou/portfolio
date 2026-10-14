import { ArrowDown, Download, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import profile from '../data/profile.json';
import './Hero.css';

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-bg-decor" aria-hidden="true">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
      </div>

      <div className="hero-inner">
        <div className="hero-content">
          <div className="hero-status">
            <span className="hero-status-dot" />
            <span>Available for opportunities</span>
          </div>

          <h1 className="hero-name">
            Hi, I'm <span className="hero-name-accent">{profile.name.split(' ')[0]}</span>
            <br />
            {profile.name.split(' ').slice(1).join(' ')}
          </h1>

          <p className="hero-title">{profile.title}</p>

          <p className="hero-subtitle">{profile.subtitle}</p>

          <div className="hero-meta">
            <span className="hero-meta-item">
              <MapPin size={14} /> {profile.location}
            </span>
          </div>

          <div className="hero-actions">
            <a href={profile.cv} className="btn btn-primary" download>
              <Download size={16} /> Download CV
            </a>
            <a href="#contact" className="btn btn-outline">
              Get in touch
            </a>
          </div>

          <div className="hero-socials">
            <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href={profile.socials.email} aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-avatar-wrapper">
            <div className="hero-avatar-ring" />
            <img
              src={profile.photo}
              alt={profile.name}
              className="hero-avatar"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.classList.add('hero-avatar-fallback');
              }}
            />
            <div className="hero-avatar-placeholder">
              {profile.name.split(' ').map((n) => n[0]).join('')}
            </div>
          </div>
        </div>
      </div>

      <a href="#about" className="hero-scroll" aria-label="Scroll to about">
        <ArrowDown size={18} />
      </a>
    </section>
  );
}

export default Hero;