import skills from '../data/skills.json';
import './Skills.css';

function Skills() {
  return (
    <section className="section skills" id="skills">
      <div className="container">
        <div className="skills-header">
          <span className="section-label">Technical Toolkit</span>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-description">
            A multidisciplinary stack spanning frontend, backend, databases, and embedded systems.
          </p>
        </div>

        <div className="skills-grid">
          {skills.categories.map((category, i) => (
            <div
              key={i}
              className="skills-category"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <h3 className="skills-category-name">{category.name}</h3>
              <div className="skills-items">
                {category.items.map((skill, j) => (
                  <span key={j} className="skill-pill">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;