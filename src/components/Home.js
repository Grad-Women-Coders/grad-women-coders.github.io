import React, { Component } from 'react';
import facebook from './common/fb.png';
import email from './common/email.png';
import git from './common/git.svg';
import twitter from './common/twitter.png';
import instagram from './common/instagram.png';
import calendar from './common/calendar.png';
import clock from './common/clock.png';
import location from './common/location.png';
import bullet from './common/bulletpoint.png'

import './Common.css';
import Typing from 'react-typing-animation';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <Cover/>
        <About/>
        <Contact/>
      </div>
    );
  }
}

class Cover extends Component {

  handleLoad(i){
    return;
  }

  render() {
    return (
        <div className="cover" onClick={this.handleLoad}>
          <div className="covertext">
            <p>
              <Typing speed={100}>
              Graduate<br/>
              Women<br/>
              Coders<br/>
              <p className="covertext-sub">
              <Typing.Delay ms={1000} />
              of Northeastern University

              </p>
              </Typing>
            </p>
          </div>
        </div>
    );
  }
}

// Homepage About section
class About extends Component {
  render() {
    return(
      <div className="About">
        <h1 className="About-header h1">
          About Us
        </h1>
        <div className="About-paragraph second-color" >
          <div className="location-date-time" >
            <div className="about-element">
              <img className="about-item" src={calendar}  alt="location icon" />
              <span className="about-item-text" > Every Monday </span>
            </div>
            <div className="about-element">
              <img className="about-item" src={clock} alt="clock icon" />
              <span className="about-item-text" > 6-8 pm </span>
            </div>
            <div className="about-element">
              <img className="about-item" src={location} alt="location icon" />
              <span className="about-item-text" > 111 Snell Library </span>
            </div>
          </div>
          <div className="about-text" >
            NU Grad Women Coders aims to create a conducive environment
            for women in tech to help each other further their ambitions
             and take on leadership roles in the tech world.
             We host weekly tech sessions by members of the community and
             inspiring external guests. We work on projects around campus to help
             solve problems using technology. We share information about and attend
              Hackathons and other tech events happening around town. We also have
              sessions on interview preparation and resume reviews. This group is open to
              all women in tech and their supporters.
            </div>
            <div className="about-text" >
            Our mission is to help our members hone their personal and professional skills by providing them
            a platform for knowledge sharing and encouraging them to
            contribute to the student community.
            <br/>
            <br/>
            We provide:

              <div className="about-bulletpoints">
                <div className="about-bulletpoint">
                  <img className="about-bulletpoint-img" src={bullet}  alt="bulletpoint icon" />
                  <span className="about-bulletpoint-text" > Tech Sessions on new technologies/products </span>
                </div>
                <div className="about-bulletpoint">
                  <img className="about-bulletpoint-img" src={bullet}  alt="bulletpoint icon" />
                  <span className="about-bulletpoint-text" > Interview Prep using different tools </span>
                </div>
                <div className="about-bulletpoint">
                  <img className="about-bulletpoint-img" src={bullet}  alt="bulletpoint icon" />
                  <span className="about-bulletpoint-text" > Resume building  </span>
                </div>
                <div className="about-bulletpoint">
                  <img className="about-bulletpoint-img" src={bullet}  alt="bulletpoint icon" />
                  <span className="about-bulletpoint-text" > Leadership opportunities </span>
                </div>
                <div className="about-bulletpoint">
                  <img className="about-bulletpoint-img" src={bullet}  alt="bulletpoint icon" />
                  <span className="about-bulletpoint-text" > General updates on Hackathons, Tech Events, Career fairs nearby </span>
                </div>
                <div className="about-bulletpoint">
                  <img className="about-bulletpoint-img" src={bullet}  alt="bulletpoint icon" />
                  <span className="about-bulletpoint-text" > Insights from speakers in various tech roles </span>
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

// Homepage Contact section
class Contact extends Component {
  constructor(props) {
    super(props);
    this.Contact = React.createRef();
  }

 render() {
    return(

      <div className="Contact About" ref={this.Contact}>
        <h1 className="Contact-header h1">
          Connect
        </h1>
        <div className="contact-items" >
            < div className="contactitem">
                <a href="mailto:nugradwomencoders@gmail.com">
                <img className="element" src={email} height="60px" width="60px" float="left" alt="email link"/>
                </a>
            </div>
            < div className="contactitem">
                <a href="https://www.facebook.com/groups/GradWomenCoders/">
                <img className="element" src={facebook} height="60px" width="60px" float="left" alt="facebook link"/>
                </a>
            </div>
            < div className="contactitem">
                <a href="https://twitter.com/gwc_nu">
                <img className="element" src={twitter} height="60px" width="60px" float="left" alt="twitter link"/>
                </a>
            </div>
            < div className="contactitem">
                <a href="https://www.instagram.com/gwc_nu/">
                <img className="element" src={instagram} height="60px" width="60px" float="left" alt="instagram link"/>
                </a>
            </div>
            < div className="contactitem">
                <a href="https://github.com/Grad-Women-Coders">
                <img className="element" src={git} height="60px" width="60px" float="left" alt="github link"/>
                </a>
            </div>
            {/* < div className="contactitem">
                <a href="https://gradwomencoders.hackpad.com/">
                <img className="element" src={hackpad} height="60px" width="60px" float="left" alt="hackpad link"/>
                </a>
            </div> */}
        </div>
      </div>

    );
  }
}

export default Home;
