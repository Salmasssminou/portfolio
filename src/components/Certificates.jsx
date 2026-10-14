import { Award, ExternalLink, ImageOff } from 'lucide-react';
import certificates from '../data/certificates.json';
import './Certificates.css';

function Certificates() {
  return (
    <section className="section certificates" id="certificates">
      <div className="container">
        <div className="certificates-header">
          <span className="section-label">Credentials</span>
          <h2 className="section-title">Certificates & Diplomas</h2>
          <p className="section-description">
            Academic achievements and official certifications earned along the way.
          </p>
        </div>

        <div className="certificates-grid">
          {certificates.items.map((cert, i) => (
            <article
              key={i}
              className="certificate-card"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="certificate-image">
                <img
                  src={cert.image}
                  alt={cert.title}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="certificate-image-placeholder">
                  <Award size={36} />
                </div>
                <div className="certificate-badge">
                  <Award size={14} />
                </div>
              </div>

              <div className="certificate-body">
                <h3 className="certificate-title">{cert.title}</h3>
                <p className="certificate-issuer">{cert.issuer}</p>
                {cert.date && <span className="certificate-date">{cert.date}</span>}

                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="certificate-link"
                  >
                    View Credential <ExternalLink size={13} />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;