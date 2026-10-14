import { Mail, MapPin, Github, Linkedin, Send } from 'lucide-react';
import profile from '../data/profile.json';
import './Contact.css';

function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="contact-wrapper">
          <div className="contact-left">
            <span className="section-label">Get in Touch</span>
            <h2 className="section-title">Let's build something together</h2>
            <p className="contact-text">
              Whether you want to collaborate on a project, chat about tech,
              or just say hi — my inbox is always open.
            </p>

            <div className="contact-info">
              <a href={profile.socials.email} className="contact-info-item">
                <div className="contact-info-icon"><Mail size={18} /></div>
                <div>
                  <span className="contact-info-label">Email</span>
                  <span className="contact-info-value">{profile.email}</span>
                </div>
              </a>

              <div className="contact-info-item">
                <div className="contact-info-icon"><MapPin size={18} /></div>
                <div>
                  <span className="contact-info-label">Location</span>
                  <span className="contact-info-value">{profile.location}</span>
                </div>
              </div>
            </div>

            <div className="contact-socials">
              <a href={profile.socials.github} target="_blank" rel="noopener noreferrer">
                <Github size={18} /> GitHub
              </a>
              <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin size={18} /> LinkedIn
              </a>
            </div>
          </div>

          <div className="contact-right">
            <form
              className="contact-form"
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                const name = formData.get('name');
                const email = formData.get('email');
                const message = formData.get('message');
                const subject = encodeURIComponent(`Message from ${name} (via portfolio)`);
                const body = encodeURIComponent(`${message}\n\n—\nFrom: ${name}\nEmail: ${email}`);
                window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
              }}
            >
              <h3 className="contact-form-title">Send me a message</h3>

              <div className="contact-field">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required placeholder="Your name" />
              </div>

              <div className="contact-field">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required placeholder="you@example.com" />
              </div>

              <div className="contact-field">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={5} required placeholder="What's on your mind?" />
              </div>

              <button type="submit" className="btn btn-primary contact-submit">
                <Send size={16} /> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;