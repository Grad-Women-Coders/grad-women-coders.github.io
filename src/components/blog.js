import React, { Component, ReactComponent } from 'react';
import './blog.css';
import './common/header.css';
import {Header, Footer} from './common/header.js'


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
