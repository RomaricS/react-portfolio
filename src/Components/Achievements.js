import React, { Component } from 'react';

class Achievements extends Component {
  render() {
    if (!this.props.data) return null;

    const achievements = this.props.data.items.map(function(achievement) {
      return (
        <div key={achievement.title} className="achievement-item">
          <div className="achievement-icon">{achievement.icon}</div>
          <div className="achievement-content">
            <h3>{achievement.title}</h3>
            <p className="achievement-description">{achievement.description}</p>
            <div className="achievement-stats">{achievement.stats}</div>
            {achievement.link && (
              <a href={achievement.link} className="achievement-link" target="_blank" rel="noopener noreferrer">
                Learn More →
              </a>
            )}
          </div>
        </div>
      );
    });

    return (
      <section id="achievements">
        <div className="row">
          <div className="twelve columns">
            <h1>Achievements & Recognition</h1>
            <p className="achievements-intro">
              Contributions to the developer community, industry recognition, and professional certifications.
            </p>
            <div className="achievements-grid">
              {achievements}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Achievements;
