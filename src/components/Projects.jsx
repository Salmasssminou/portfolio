import { useState } from 'react';
import { Github, ExternalLink, CheckCircle2, ChevronLeft, ChevronRight, X, ImageOff } from 'lucide-react';
import projects from '../data/projects.json';
import './Projects.css';

function Projects() {
  const [lightbox, setLightbox] = useState({ open: false, images: [], index: 0, title: '' });
  const [currentSlide, setCurrentSlide] = useState({});

  const openLightbox = (images, index, title) => {
    setLightbox({ open: true, images, index, title });
  };

  const closeLightbox = () => setLightbox({ ...lightbox, open: false });

  const nextSlide = () => {
    setLightbox({ ...lightbox, index: (lightbox.index + 1) % lightbox.images.length });
  };

  const prevSlide = () => {
    setLightbox({
      ...lightbox,
      index: (lightbox.index - 1 + lightbox.images.length) % lightbox.images.length
    });
  };

  const changeCardSlide = (cardIndex, slideIndex) => {
    setCurrentSlide({ ...currentSlide, [cardIndex]: slideIndex });
  };

  const nextCardSlide = (cardIndex, total) => {
    const current = currentSlide[cardIndex] || 0;
    setCurrentSlide({ ...currentSlide, [cardIndex]: (current + 1) % total });
  };

  const prevCardSlide = (cardIndex, total) => {
    const current = currentSlide[cardIndex] || 0;
    setCurrentSlide({ ...currentSlide, [cardIndex]: (current - 1 + total) % total });
  };

  return (
    <section className="section projects" id="projects">
      <div className="container">
        <div className="projects-header">
          <span className="section-label">Selected Work</span>
          <h2 className="section-title">Projects</h2>
          <p className="section-description">
            Real-world tools built to solve practical problems — from industrial automation to safety reporting.
          </p>
        </div>

        <div className="projects-grid">
          {projects.items.map((project, i) => {
            const images = project.images || [];
            const slideIdx = currentSlide[i] || 0;
            const hasImages = images.length > 0;

            return (
              <article
                key={i}
                className="project-card"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {/* Image carousel */}
                <div className="project-image">
                  {hasImages ? (
                    <>
                      <img
                        src={images[slideIdx]}
                        alt={`${project.title} ${slideIdx + 1}`}
                        onClick={() => openLightbox(images, slideIdx, project.title)}
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextElementSibling.style.display = 'flex';
                        }}
                      />
                      <div className="project-image-placeholder">
                        <ImageOff size={36} />
                      </div>

                      {images.length > 1 && (
                        <>
                          <button
                            className="project-carousel-btn project-carousel-prev"
                            onClick={() => prevCardSlide(i, images.length)}
                            aria-label="Previous"
                          >
                            <ChevronLeft size={18} />
                          </button>
                          <button
                            className="project-carousel-btn project-carousel-next"
                            onClick={() => nextCardSlide(i, images.length)}
                            aria-label="Next"
                          >
                            <ChevronRight size={18} />
                          </button>
                          <div className="project-dots">
                            {images.map((_, d) => (
                              <button
                                key={d}
                                className={`project-dot ${d === slideIdx ? 'active' : ''}`}
                                onClick={() => changeCardSlide(i, d)}
                                aria-label={`Go to slide ${d + 1}`}
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </>
                  ) : (
                    <div className="project-image-placeholder" style={{ display: 'flex' }}>
                      <ImageOff size={36} />
                    </div>
                  )}

                  {project.status === 'completed' && (
                    <span className="project-status">
                      <CheckCircle2 size={12} /> Completed
                    </span>
                  )}
                </div>

                <div className="project-body">
                  {project.subtitle && (
                    <span className="project-subtitle">{project.subtitle}</span>
                  )}

                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  {project.highlights && project.highlights.length > 0 && (
                    <ul className="project-highlights">
                      {project.highlights.map((h, j) => (
                        <li key={j}>
                          <CheckCircle2 size={13} />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="project-tech">
                    {project.tech.map((t, j) => (
                      <span key={j} className="project-tech-tag">{t}</span>
                    ))}
                  </div>

                  <div className="project-actions">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <Github size={16} /> View Code
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link project-link-primary"
                      >
                        <ExternalLink size={16} /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox.open && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">
            <X size={22} />
          </button>

          {lightbox.images.length > 1 && (
            <>
              <button
                className="lightbox-nav lightbox-prev"
                onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                aria-label="Previous"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                className="lightbox-nav lightbox-next"
                onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                aria-label="Next"
              >
                <ChevronRight size={24} />
              </button>
              <div className="lightbox-counter">
                {lightbox.index + 1} / {lightbox.images.length}
              </div>
            </>
          )}

          <img
            src={lightbox.images[lightbox.index]}
            alt={lightbox.title}
            className="lightbox-image"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}

export default Projects;