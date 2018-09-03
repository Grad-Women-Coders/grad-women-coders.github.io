import React, { Component, ReactComponent } from 'react';
import './common/header.css';
import {Header, Footer} from './common/header.js'


class Jobs extends Component {
  render() {
    return (
      <div className="App">
        <div className="blog-header" >
        Career Opportunities 
        </div>
        <div className="no-posts">
        Check back soon!
        </div>
      </div>
    );
  }
}

export default Jobs;
