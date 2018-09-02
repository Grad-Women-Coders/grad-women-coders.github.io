import React from 'react';
import ReactDOM from 'react-dom';
import logo from './gwc.jpeg'; 
import facebook from './fb.png';
import email from './email.png';
import git from './git.svg';
import ccis from './ccis.png';
import twitter from './twitter.png';
import instagram from './instagram.png';
import registerServiceWorker from './registerServiceWorker';

import { Link } from 'react-router-dom'

registerServiceWorker();

// Tab item
class Square extends React.Component {

    constructor(props) {
      super(props);
      this.state = { value:this.props.text, showText:true, color:'#afcaff'}
      this.hoverOn= this.hoverOn.bind(this)
      this.hoverOff= this.hoverOff.bind(this)
   
      this.color 
    }
  
    render() {
      return (
        <button className="square" 
          onClick={this.props.click}
          onMouseOver={this.hoverOn} onMouseOut={this.hoverOff} >
          <div>
              <div >
                  {this.state.value} 
              </div>
          </div>
        </button>
      );
    }
  
    hoverOn() {
      this.setState({ value: this.props.text, showText:true, color:"#080350"});
    }
  
    hoverOff() {
      this.setState({ value: this.props.text, showText:false, color:"#fff"});
    }
  }
  
  
  // Homepage Header
  export class Header extends React.Component {
  
    constructor(props) {
      super(props);
      this.Contact = React.createRef();
    }
  
    onEventsClick() {
    }

    onGalleryClick() {
    }
  
    onJobPostingsClick() {
    }

    onBlogClick() {
    }
  
    onTeamClick() {
    }
  
    onContactClick() {
    }

    onHomeClick() {
    }
  
    render() {
      return (
        <div className="App-header">
          <div id="title-mobile" className="title-mobile header-el" >
              NU Graduate Women Coders
          </div>
          <div className="left-header header-el" >
            <img className="logo" src={logo} alt="homepage logo" />
          </div>
          <div id="title" className="title header-el" >
              supporting and engaging women in tech
          </div>
           <div className="tab-row header-el ">
           <Link to='/'><Square text="home" click={this.onHomeClick} /></Link>
           <Link to='/contact'><Square text="contact" click={this.onContactClick} /></Link>
           <Link to='/team'><Square text="team" click={this.onTeamClick} /></Link>
           <Link to='/events'><Square text="events" click={this.onEventsClick} /></Link>
           <Link to='/gallery'><Square text="gallery" click={this.onGalleryClick} /></Link>
           <Link to='/blog'><Square text="blog" click={this.onBlogClick} /></Link>
           <Link to='/jobs'><Square text="job postings" click={this.onJobPostingsClick} /></Link>
           </div>
        </div> 
      );
    }
  }

  // Footer for all pages
export class Footer extends React.Component {
    render() {
      return(
        <div className="footer second-color">
          <div className="footer-events column" >
            <a href="https://www.facebook.com/groups/GradWomenCoders" className="orange" > Upcoming Events </a>
            <span className="no-upcoming-events" hidden={false}> Check back soon! </span>
          </div>
          <div className="footer-name column orange">
            <span className="block footermark" > © NU Grad Women Coders 2018 </span>
            <img className="footerlogo block" src={ccis} alt="ccis logo" />
          </div>
          <div className="footer-contact column">
            <span className="orange" > Contact Us </span>
            <div className="footercontact" display="inline-block">
              <div className="contactitem small">
                <a href="mailto:nugradwomencoders@gmail.com"> 
                      <img className="" src={email} height="40px" width="40px" float="left" alt="email link"/>
                </a>
              </div>
              <div className="contactitem small">
                <a href="https://www.facebook.com/groups/GradWomenCoders/"> 
                      <img className="" src={facebook} height="40px" width="40px" float="left" alt="facebook link"/>
                </a>
              </div>
            </div>
          </div>
        </div>
      ); 
    }
  }
