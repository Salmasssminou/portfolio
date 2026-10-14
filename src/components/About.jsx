import { BookOpen, Code2, Rocket, Users } from 'lucide-react';
import profile from '../data/profile.json';
import './About.css';

function About() {
  const highlights = [
    {
      icon: <Code2 size={22} />,
      title: 'Full-Stack Development',
      text: 'Building end-to-end web applications with modern tools and clean architecture.',
    },
    {
      icon: <Rocket size={22} />,
      title: 'Real-World Impact',
      text: 'Focused on solving practical problems — from industrial tools to HSE dashboards.',
    },
    {
      icon: <BookOpen size={22} />,
      title: 'Continuous Learning',
      text: 'Self-taught across multiple stacks — from frontend to embedded systems.',
    },
    {
      icon: <Users size={22} />,
      title: 'Teaching & Sharing',
      text: 'Experience as a robotics teaching assistant guiding students through hands-on projects.',
    },
  ];

  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-left">
            <span className="section-label">About Me</span>
            <h2 className="section-title">
              Turning ideas into <span className="about-title-accent">working software</span>
            </h2>
            <p className="about-text">{profile.about}</p>

            <div className="about-facts">
              <div className="about-fact">
                <span className="about-fact-value">3.5/5</span>
                <span className="about-fact-label">GPA at NJUPT</span>
              </div>
              <div className="about-fact">
                <span className="about-fact-value">5+</span>
                <span className="about-fact-label">Projects Built</span>
              </div>
              <div className="about-fact">
                <span className="about-fact-value">4</span>
                <span className="about-fact-label">Languages Spoken</span>
              </div>
            </div>
          </div>

          <div className="about-right">
            {highlights.map((item, i) => (
              <div key={i} className="about-card">
                <div className="about-card-icon">{item.icon}</div>
                <div>
                  <h3 className="about-card-title">{item.title}</h3>
                  <p className="about-card-text">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;