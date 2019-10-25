import React, { Component } from 'react';
import './common/header.css';


class Blog extends Component {
  render() {
    return (
      <div className="App">
        <div className="blog-header" >
        Blog Posts
        </div>
        <div className="no-posts">
        Check back soon!
        </div>
      </div>
    );
  }
}

export default Blog;
