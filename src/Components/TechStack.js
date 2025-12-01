import React, { Component } from 'react';

class TechStack extends Component {
  render() {
    if (!this.props.data) return null;

    const categories = this.props.data.categories.map(function(category) {
      const technologies = category.technologies.map(function(tech) {
        return (
          <div key={tech.name} className="tech-item">
            <div className="tech-icon">{tech.icon}</div>
            <div className="tech-info">
              <h4>{tech.name}</h4>
              <div className="tech-bar-container">
                <div className="tech-bar" style={{width: tech.proficiency + '%'}}>
                  <span className="tech-percent">{tech.proficiency}%</span>
                </div>
              </div>
            </div>
          </div>
        );
      });

      return (
        <div key={category.name} className="tech-category">
          <h3 className="category-name">{category.name}</h3>
          <div className="tech-grid">
            {technologies}
          </div>
        </div>
      );
    });

    return (
      <section id="tech-stack">
        <div className="row">
          <div className="twelve columns">
            <h1>Technology Stack</h1>
            <p className="tech-intro">
              My expertise spans the full stack, from frontend frameworks to cloud infrastructure.
              Here's a comprehensive overview of the technologies I work with regularly.
            </p>
            <div className="tech-categories-wrapper">
              {categories}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default TechStack;
