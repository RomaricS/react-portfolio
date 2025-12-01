import React, { Component } from 'react';

class Blog extends Component {
  render() {
    if (!this.props.data) return null;

    const posts = this.props.data.posts.map(function(post) {
      return (
        <div key={post.title} className="blog-post">
          <div className="post-header">
            <h3>
              <a href={post.url} target="_blank" rel="noopener noreferrer">
                {post.title}
              </a>
            </h3>
            <div className="post-meta">
              <span className="post-date">{post.date}</span>
              <span className="post-separator">•</span>
              <span className="post-read-time">{post.readTime}</span>
            </div>
          </div>
          <p className="post-excerpt">{post.excerpt}</p>
          <div className="post-tags">
            {post.tags.map(function(tag) {
              return (
                <span key={tag} className="post-tag">
                  {tag}
                </span>
              );
            })}
          </div>
          <a href={post.url} className="read-more" target="_blank" rel="noopener noreferrer">
            Read Article →
          </a>
        </div>
      );
    });

    return (
      <section id="blog">
        <div className="row">
          <div className="twelve columns">
            <h1>Technical Blog</h1>
            <p className="blog-intro">
              I regularly write about software engineering, system design, and best practices.
              Here are some of my recent articles.
            </p>
            <div className="blog-posts-grid">
              {posts}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Blog;
