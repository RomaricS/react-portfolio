import React, { Component } from 'react';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: 'all'
    };
  }

  setFilter(filter) {
    this.setState({ filter: filter });
  }

  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects.map(function(project) {
      var projectImage = 'images/portfolio/' + project.image;

      return (
        <div key={project.title} className="portfolio-item-detailed">
          <div className="project-image">
            <img alt={project.title} src={projectImage} />
          </div>
          <div className="project-content">
            <h3>{project.title}</h3>
            <p className="project-category">{project.category}</p>
            <p className="project-description">{project.description}</p>

            <div className="project-technologies">
              {project.technologies && project.technologies.map(function(tech) {
                return <span key={tech} className="tech-badge">{tech}</span>;
              })}
            </div>

            {project.metrics && (
              <div className="project-metrics">
                {project.metrics.performance && (
                  <div className="metric">
                    <span className="metric-label">Performance:</span>
                    <span className="metric-value">{project.metrics.performance}</span>
                  </div>
                )}
                {project.metrics.scale && (
                  <div className="metric">
                    <span className="metric-label">Scale:</span>
                    <span className="metric-value">{project.metrics.scale}</span>
                  </div>
                )}
                {project.metrics.users && (
                  <div className="metric">
                    <span className="metric-label">Users:</span>
                    <span className="metric-value">{project.metrics.users}</span>
                  </div>
                )}
                {project.metrics.data && (
                  <div className="metric">
                    <span className="metric-label">Data:</span>
                    <span className="metric-value">{project.metrics.data}</span>
                  </div>
                )}
                {project.metrics.impact && (
                  <div className="metric">
                    <span className="metric-label">Impact:</span>
                    <span className="metric-value">{project.metrics.impact}</span>
                  </div>
                )}
                {project.metrics.adoption && (
                  <div className="metric">
                    <span className="metric-label">Adoption:</span>
                    <span className="metric-value">{project.metrics.adoption}</span>
                  </div>
                )}
                {project.metrics.downloads && (
                  <div className="metric">
                    <span className="metric-label">Downloads:</span>
                    <span className="metric-value">{project.metrics.downloads}</span>
                  </div>
                )}
                {project.metrics.efficiency && (
                  <div className="metric">
                    <span className="metric-label">Efficiency:</span>
                    <span className="metric-value">{project.metrics.efficiency}</span>
                  </div>
                )}
                {project.metrics.reliability && (
                  <div className="metric">
                    <span className="metric-label">Reliability:</span>
                    <span className="metric-value">{project.metrics.reliability}</span>
                  </div>
                )}
              </div>
            )}

            <div className="project-links">
              {project.github && (
                <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-github"></i> View Code
                </a>
              )}
              {project.live && (
                <a href={project.live} className="project-link" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-external-link"></i> Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      );
    });

    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns">
            <h1>Featured Projects</h1>
            <p className="portfolio-intro">
              A selection of impactful projects demonstrating technical expertise,
              problem-solving ability, and measurable results.
            </p>
            <div className="portfolio-wrapper">
              {projects}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
