import { Calendar, Camera } from 'lucide-react';
import activities from '../data/activities.json';
import './Activities.css';

function Activities() {
  return (
    <section className="section activities" id="activities">
      <div className="container">
        <div className="activities-header">
          <span className="section-label">Beyond Code</span>
          <h2 className="section-title">Activities & Events</h2>
          <p className="section-description">
            Volunteering, clubs, training sessions, and events I have been part of.
          </p>
        </div>

        <div className="activities-list">
          {activities.items.map((activity, i) => (
            <article
              key={i}
              className="activity-card"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="activity-content">
                <div className="activity-header">
                  <div>
                    <h3 className="activity-title">{activity.title}</h3>
                    {activity.role && (
                      <p className="activity-role">{activity.role}</p>
                    )}
                  </div>
                  {activity.date && (
                    <span className="activity-date">
                      <Calendar size={13} /> {activity.date}
                    </span>
                  )}
                </div>

                <p className="activity-description">{activity.description}</p>

                {activity.tags && activity.tags.length > 0 && (
                  <div className="activity-tags">
                    {activity.tags.map((tag, j) => (
                      <span key={j} className="activity-tag">{tag}</span>
                    ))}
                  </div>
                )}
              </div>

              {activity.images && activity.images.length > 0 && (
                <div className="activity-gallery">
                  {activity.images.map((img, j) => (
                    <div key={j} className="activity-gallery-item">
                      <img src={img} alt={`${activity.title} ${j + 1}`} />
                    </div>
                  ))}
                </div>
              )}

              {activity.images && activity.images.length === 0 && (
                <div className="activity-gallery-empty">
                  <Camera size={20} />
                  <span>Photos coming soon</span>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Activities;