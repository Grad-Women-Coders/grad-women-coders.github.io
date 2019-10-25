import React, { Component } from 'react';

import emailcontact from './email.png';
import facebookcontact from './facebook.png';
import instagramcontact from './instagram.png';

import './common/header.css';

import MailchimpSubscribe from "react-mailchimp-subscribe"

const actionURL = "https://neu.us15.list-manage.com/subscribe/post?u=88dd80df664d10f8289493412&amp;id=b9f017b346"


class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = { hidePhoto:true};
    this.hoverOn= this.hoverOn.bind(this);
    this.hoverOff= this.hoverOff.bind(this);
  }

  hoverOn() {
    this.setState({hidePhoto:true});
  }

  hoverOff() {
    this.setState({hidePhoto:true});
  }

  render() {
    return (
      <div className="App">
        <div className="Team-Header_">
          <div className="contact-cover-text" >
          You can reach us here!
          </div>
        </div>
        <div className="contact-div" >
          <div className="contact-info">
            <div className="contact-column">
              <ContactItem title="Send us an email" image={emailcontact} link="mailto:nugradwomencoders@gmail.com" sendtext="Email us" />
            </div><div className="contact-column">
              <ContactItem title="Join us on Facebook" image={facebookcontact} link="https://www.facebook.com/groups/GradWomenCoders/about/" sendtext="Join us" />
            </div><div className="contact-column">
              <ContactItem title="Follow us on Instagram" image={instagramcontact} link="https://www.instagram.com/gwc_nu/" sendtext="Follow us" />
            </div>
          </div>
        </div>
        <iframe className="map" title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5898.304414487892!2d-71.0950657451163!3d42.33927816720446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e37a21f1bc9735%3A0x655e0c46cdbdf694!2sWest+Village+G!5e0!3m2!1sen!2sus!4v1535663511720" width="822px" height="350" frameBorder="0"  allowFullScreen></iframe>
        <Form/>
      </div>
    );
  }
}

class ContactItem extends React.Component {

  goToLink(a) {
    window.open(a,"_blank");
  }

  render() {
    return(
      <div className="contact-item">
        <div className="contact-image">
         <img className="contact-image-img" src={this.props.image} alt="" />
        </div>
        {/* <div className="contact-title">
         {this.props.title}
        </div> */}
        <div className="contact-sendtext">
         <button className="contact-button" onClick={() =>{this.goToLink(this.props.link)}}> {this.props.sendtext} </button>
        </div>
      </div>
    );
  }
}

class Form extends React.Component {

  render() {
    return(
      <div className="contact-form-div">
      <div className="contact-form-header" > Subscribe to our email list </div>
          <MailchimpSubscribe url={actionURL}/>
       </div>



    );
  }
}

export default Contact;
