import React, { Component, ReactComponent } from 'react';
import './common/header.css';
import location from './job_location.png'
import arrow from './arrow.png'
import {Header, Footer} from './common/header.js'


class Jobs extends Component {
  render() {
    return (
      <div className="App">
        <div className="jobs-header" >
        Career Opportunities
        </div>
        <div className="no-posts" hidden={true}>
        Check back soon!
        </div>
        <div className="jobs-div">
          <Job title="Hack Cooper Hackathon"
          desc="Hack Cooper is a 24 Hour hackathon located at Cooper Union for graduate and undergraduate students,
         artists, designers, and hardware tinkerers. Build your dream project!"
          link="http://hackcooper.org/"
          date="Date: October 12-13, 2018"
          loc="Cooper Union, NY"/>
        </div>
        <div className="jobs-div">
          <Job title="test job"
          desc="test desc"
          date="Date: October 12-13, 2018"
          loc="Cooper Union, NY"/>
        </div>
      </div>
    );
  }
}

class Job extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="job" >
        <div className="job-column left">
          <img src={location} className="job-loc-img"/>
          <div className="job-location">
            {this.props.loc}
          </div>
        </div>
        <div className="job-column middle">
          <div className="job-item job-title">
            {this.props.title}
          </div>
          <div className="job-item job-date">
            {this.props.date}
          </div>

          <div className="job-item job-description" >
            {this.props.desc}
          </div>
        </div>
        <div className="job-column right">
          <div className="job-item job-link">
            <a className="button job-link-btn" href={this.props.link} target="_blank"> 
              More Info
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Jobs;
