import React, { Component } from 'react';
import './common/header.css';
import location from './job_location.png';


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
          <Job title="Digital Technology Leadership Program (DTLP) - 2019"
          desc="The Digital Technology Leadership Program (DTLP) offers those with a passion
          to grow their leadership, business acumen, and technical skills while building a career
          with unlimited potential. Program members lead by doing, gaining real-world experience by
          working on important, challenging projects alongside some of the brightest technical minds
          in the world."
          link="https://jobs.gecareers.com/ShowJob/Id/59662/Digital-Technology-Leadership-Program-(DTLP)-2019/"
          date="Date: October 12-13, 2018"
          loc="United States; Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut,
          Delaware, District of Columbia, Florida, Georgia, Idaho, Illinois, Indiana, Iowa, Kansas,
          Kentucky, Louisiana, Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi,
          Missouri, Montana, Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York,
          North Carolina, North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island,
          South Carolina, South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington,
          West Virginia, Wisconsin, Wyoming"/>
        </div>
        <div className="jobs-div">
          <Job title="Digital Technology Leadership Program (DTLP) - 2019-----11111"
          desc="The Digital Technology Leadership Program (DTLP) offers those with a passion
          to grow their leadership, business acumen, and technical skills while building a career
          with unlimited potential. Program members lead by doing, gaining real-world experience by
          working on important, challenging projects alongside some of the brightest technical minds
          in the world."
          link="https://jobs.gecareers.com/ShowJob/Id/59662/Digital-Technology-Leadership-Program-(DTLP)-2019/"
          date="Date: October 12-13, 2018"
          loc="United States; Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut,
          Delaware, District of Columbia, Florida, Georgia, Idaho, Illinois, Indiana, Iowa, Kansas,
          Kentucky, Louisiana, Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi,
          Missouri, Montana, Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York,
          North Carolina, North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island,
          South Carolina, South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington,
          West Virginia, Wisconsin, Wyoming"/>
        </div>
      </div>
    );
  }
}

class Job extends Component {

  render() {
    return(
      <div className="job" >
        <div className="job-column left">
          <img src={location} className="job-loc-img" alt="" />
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
            <a className="button job-link-btn" href={this.props.link} target="_blank" rel="noopener noreferrer">
              More Info
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Jobs;
