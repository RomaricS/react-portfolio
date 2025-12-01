import React, { Component } from 'react';

class Leadership extends Component {
  render() {
    if (!this.props.data) return null;

    const items = this.props.data.items.map(function(item) {
      return (
        <div key={item.title} className="leadership-item">
          <div className="leadership-icon">{item.icon}</div>
          <div className="leadership-content">
            <h3>{item.title}</h3>
            <p className="leadership-description">{item.description}</p>
            <div className="leadership-impact">
              <strong>Impact:</strong> {item.impact}
            </div>
          </div>
        </div>
      );
    });

    return (
      <section id="leadership">
        <div className="row">
          <div className="twelve columns">
            <h1>Leadership & Impact</h1>
            <p className="leadership-intro">
              Beyond writing code, I focus on multiplying impact through mentorship,
              process improvement, and technical leadership.
            </p>
            <div className="leadership-grid">
              {items}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Leadership;
