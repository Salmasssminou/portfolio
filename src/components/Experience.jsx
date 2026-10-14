import { Briefcase, MapPin, CheckCircle2 } from 'lucide-react';
import experience from '../data/experience.json';
import './Experience.css';

function Experience() {
  return (
    <section className="section experience" id="experience">
      <div className="container">
        <div className="experience-header">
          <span className="section-label">Career Path</span>
          <h2 className="section-title">Experience</h2>
          <p className="section-description">
            A mix of hands-on industry work, teaching, and applying technology to real industrial problems.
          </p>
        </div>

        <div className="experience-timeline">
          {experience.items.map((item, i) => (
            <div
              key={i}
              className="experience-item"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="experience-marker">
                <Briefcase size={16} />
              </div>

              <div className="experience-card">
                <div className="experience-top">
                  <div>
                    <h3 className="experience-role">{item.role}</h3>
                    <p className="experience-company">{item.company}</p>
                  </div>
                  <span className="experience-period">{item.period}</span>
                </div>

                {item.location && (
                  <div className="experience-location">
                    <MapPin size={13} /> {item.location}
                  </div>
                )}

                <p className="experience-description">{item.description}</p>

                {item.highlights && item.highlights.length > 0 && (
                  <ul className="experience-highlights">
                    {item.highlights.map((h, j) => (
                      <li key={j}>
                        <CheckCircle2 size={14} />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;