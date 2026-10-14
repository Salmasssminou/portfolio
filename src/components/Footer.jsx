import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import profile from '../data/profile.json';
import './Footer.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-logo">{profile.name}</span>
            <p className="footer-tagline">{profile.title}</p>
          </div>

          <div className="footer-links">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
            <a href={profile.cv} download>Download CV</a>
          </div>

          <div className="footer-socials">
            <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github size={18} />
            </a>
            <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href={profile.socials.email} aria-label="Email">
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {year} {profile.name}. Built with <Heart size={12} className="footer-heart" /> in Morocco.
          </p>
          <p className="footer-credit">
            React · Vite · GitHub Pages
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;