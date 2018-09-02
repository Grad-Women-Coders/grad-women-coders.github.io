import React, { Component, ReactComponent } from 'react';
import coverphoto from './common/cover_photo.jpg';
import facebook from './common/fb.png';
import email from './common/email.png';
import hackpad from './common/hackpad.png';
import git from './common/git.svg';
import twitter from './common/twitter.png';
import instagram from './common/instagram.png';
import logo from './common/gwc.jpeg';
import neu from './common/neu.png';
import calendar from './common/calendar.png';
import clock from './common/clock.png';
import location from './common/location.png';
import ccis from './common/ccis.png';
import bullet from './common/bulletpoint.png'

import witempsummit2018 from './events_pics/witempsummit2018.png';
import cloud9google2018 from './events_pics/cloud92018.png';
import algandintprep2018 from './events_pics/algandinterview2018.png';
import googlecambnight2017 from './events_pics/googlecambnight2017.jpg';
import internshiptalks2017 from './events_pics/internshiptalks2017.jpg';
import internshiptalks2018 from './events_pics/internshiptalks2018.png';
import network2017 from './events_pics/network2017.jpg';
import sectechtalk2017 from './events_pics/sectechtalk2017.jpg';
import talkintuit2017 from './events_pics/talkintuit2017.jpg';
import talkintuitsp17 from './events_pics/talkintuitsp17.jpg';
import techtalk2016 from './events_pics/techtalk2016.png';

import {const_witempsummit2018, const_cloud9google2018,const_algandintprep2018,
  const_googlecambnight2017, const_internshiptalks2017,const_internshiptalks2018,
  const_network2017, const_sectechtalk2017,const_talkintuit2017,
  const_talkintuitsp17, const_techtalk2016,const_gmosession2017,
  const_microservicessummer17, const_codeathon2017,const_codeathonII2017,
  const_introtoproclanguage2017, const_ruelala2017, const_introobjstorage2017,
  const_openstack2017, const_leapmotion2017, const_compbiology2017,
  const_witpanel2017, const_designpatterns2017, const_deeplearning2017,
  const_interviewprep2017, const_dsportfolio2017, const_ds60mins2017,
  const_reliabilityman2016,
} from './Events_Info.js';

import Popup from "reactjs-popup";
import DOMPurify from 'dompurify'
import './events.css';
import './common/header.css';
import {Header, Footer} from './common/header.js'

const contentStyle = {
  height: "90%",
  width: "60%", 
  overflow:"scroll", 
  background: "#c7d2db"
};

class Events extends Component {
  constructor(props) {
    super(props); 

    this.state = { currentPage: "1", page1Style:"clickedButton",
    page2Style:"", page3Style:"", 
    isPage1Hidden: false, isPage2Hidden:true};

    this.onPage1Click= this.onPage1Click.bind(this)
    this.onPage2Click= this.onPage2Click.bind(this)
    this.onPage3Click= this.onPage3Click.bind(this)
  }

  onPage1Click() { 
    this.setState({currentPage: "1", page1Style:"clickedButton",
    page2Style:"", page3Style:"", 
    isPage1Hidden: false, isPage2Hidden:true});
  }

  onPage2Click() { 
    this.setState({currentPage: "2", page1Style:"",
    page2Style:"clickedButton", page3Style:"", 
    isPage1Hidden: true, isPage2Hidden:false});
  }

  onPage3Click() { 
    this.setState({currentPage: "3", page1Style:"",
    page2Style:"", page3Style:"clickedButton"});
  }

  render() {
    return (
      <div className="App">
        <div className="Events-Header">      
          
          <div className="events-pages">
            <button className={ "events-tag-button " + this.state.page1Style} onClick={this.onPage1Click} > 1 </button> 
            <button className={ "events-tag-button " + this.state.page2Style} onClick={this.onPage2Click} > 2 </button> 
            {/* <button className={ "events-tag-button " + this.state.page3Style} onClick={this.onPage3Click} > 3 </button>  */}
          </div> 
        </div>
        <div className="Events" hidden={this.state.isPage1Hidden}>
          <div className="events-cover-text future-events-header">
          Upcoming Events
          </div>
          <div className="noFutureEvents"> Check back soon for the latest events! </div>
          {/* <Event currentPage= {this.state.currentPage} 
                  title="Test Future Event" pic={coverphoto} 
                  desc="Test event for testing future events for 
                  sorting and styling"
                  dateyear="2018" datemonth="October" datestartday="28" dateendday="30" 
                  time="7pm-9pm" location="Northeastern University"
                  popupContent= ""  /> */}
        </div>
          <div className="events-cover-text past-events-header">
          Past Events
          </div>
          <div className="Events">
            <div className="page1" hidden={this.state.isPage1Hidden} >
              <Event currentPage= {this.state.currentPage} 
                      title= {const_witempsummit2018.title} pic={witempsummit2018} 
                      desc={const_witempsummit2018.desc}
                      dateyear={const_witempsummit2018.dateyear} datemonth={const_witempsummit2018.datemonth}  
                      datestartday={const_witempsummit2018.datestartday} dateendday={const_witempsummit2018.dateendday} 
                      time={const_witempsummit2018.time} location={const_witempsummit2018.location} 
                      popupContent= {const_witempsummit2018.popupContent} />
              <Event currentPage= {this.state.currentPage} 
                      title= {const_cloud9google2018.title} pic={cloud9google2018} 
                      desc={const_cloud9google2018.desc}
                      dateyear={const_cloud9google2018.dateyear} datemonth={const_cloud9google2018.datemonth}  
                      datestartday={const_cloud9google2018.datestartday} dateendday={const_cloud9google2018.dateendday} 
                      time={const_cloud9google2018.time} location={const_cloud9google2018.location} 
                      popupContent= {const_cloud9google2018.popupContent} />
              <Event currentPage= {this.state.currentPage} 
                      title= {const_algandintprep2018.title} pic={algandintprep2018} 
                      desc={const_algandintprep2018.desc}
                      dateyear={const_algandintprep2018.dateyear} datemonth={const_algandintprep2018.datemonth}  
                      datestartday={const_algandintprep2018.datestartday} dateendday={const_algandintprep2018.dateendday} 
                      time={const_algandintprep2018.time} location={const_algandintprep2018.location} 
                      popupContent= {const_algandintprep2018.popupContent} />
              <Event currentPage= {this.state.currentPage} 
                      title= {const_internshiptalks2018.title} pic={internshiptalks2018} 
                      desc={const_internshiptalks2018.desc}
                      dateyear={const_internshiptalks2018.dateyear} datemonth={const_internshiptalks2018.datemonth}  
                      datestartday={const_internshiptalks2018.datestartday} dateendday={const_internshiptalks2018.dateendday} 
                      time={const_internshiptalks2018.time} location={const_internshiptalks2018.location} 
                      popupContent= {const_internshiptalks2018.popupContent} />
              <Event currentPage= {this.state.currentPage} 
                      title= {const_gmosession2017.title} 
                      desc={const_gmosession2017.desc} pic={logo}
                      dateyear={const_gmosession2017.dateyear} datemonth={const_gmosession2017.datemonth}  
                      datestartday={const_gmosession2017.datestartday} dateendday={const_gmosession2017.dateendday} 
                      time={const_gmosession2017.time} location={const_gmosession2017.location} 
                      popupContent= {const_gmosession2017.popupContent} />
              <Event currentPage= {this.state.currentPage} 
                      title= {const_talkintuit2017.title} pic={talkintuit2017}
                      desc={const_talkintuit2017.desc}
                      dateyear={const_talkintuit2017.dateyear} datemonth={const_talkintuit2017.datemonth}  
                      datestartday={const_talkintuit2017.datestartday} dateendday={const_talkintuit2017.dateendday} 
                      time={const_talkintuit2017.time} location={const_talkintuit2017.location} 
                      popupContent= {const_talkintuit2017.popupContent} />
              <Event currentPage= {this.state.currentPage} 
                      title= {const_internshiptalks2017.title} 
                      desc={const_internshiptalks2017.desc} pic={internshiptalks2017}
                      dateyear={const_internshiptalks2017.dateyear} datemonth={const_internshiptalks2017.datemonth}  
                      datestartday={const_internshiptalks2017.datestartday} dateendday={const_internshiptalks2017.dateendday} 
                      time={const_internshiptalks2017.time} location={const_internshiptalks2017.location} 
                      popupContent= {const_internshiptalks2017.popupContent} />
              <Event currentPage= {this.state.currentPage} 
                      title= {const_microservicessummer17.title} 
                      desc={const_microservicessummer17.desc} pic={logo}
                      dateyear={const_microservicessummer17.dateyear} datemonth={const_microservicessummer17.datemonth}  
                      datestartday={const_microservicessummer17.datestartday} dateendday={const_microservicessummer17.dateendday} 
                      time={const_microservicessummer17.time} location={const_microservicessummer17.location} 
                      popupContent= {const_microservicessummer17.popupContent} />
            </div>
            <div className="page2" hidden={this.state.isPage2Hidden} >
              <Event currentPage= {this.state.currentPage} 
                        title= {const_codeathonII2017.title} 
                        desc={const_codeathonII2017.desc} pic={logo}
                        dateyear={const_codeathonII2017.dateyear} datemonth={const_codeathonII2017.datemonth}  
                        datestartday={const_codeathonII2017.datestartday} dateendday={const_codeathonII2017.dateendday} 
                        time={const_codeathonII2017.time} location={const_codeathonII2017.location} 
                        popupContent= {const_codeathonII2017.popupContent} />
              <Event currentPage= {this.state.currentPage} 
                      title= {const_codeathon2017.title} 
                      desc={const_codeathon2017.desc} pic={logo}
                      dateyear={const_codeathon2017.dateyear} datemonth={const_codeathon2017.datemonth}  
                      datestartday={const_codeathon2017.datestartday} dateendday={const_codeathon2017.dateendday} 
                      time={const_codeathon2017.time} location={const_codeathon2017.location} 
                      popupContent= {const_codeathon2017.popupContent} />
            </div>
        </div>
        <div className="events-pages"  >
            <button className={ "events-tag-button " + this.state.page1Style} onClick={this.onPage1Click} > 1 </button> 
            <button className={ "events-tag-button " + this.state.page2Style} onClick={this.onPage2Click} > 2 </button> 
            {/* <button className={ "events-tag-button " + this.state.page3Style} onClick={this.onPage3Click} > 3 </button>  */}
          </div> 
      </div>
    );
  }
}

class Event extends Component {
  constructor(props) {
    super(props);

    // define local vars to use
    var today = new Date();
    var styling = "past-event";
    var ev_date= "";
    var mnth = 0; 

    // determine monthh index for calculations
    switch (this.props.datemonth) {
      case "January":
          mnth = 1; break;
      case "February":
          mnth = 2; break;
      case "March":
          mnth = 3; break;
      case "April":
          mnth = 4; break;
      case "May":
          mnth = 5; break;
      case "June":
          mnth = 6; break;
      case "July":
          mnth = 7; break;
      case "August":
          mnth = 8; break;
      case "September":
          mnth = 9; break;
      case "October":
          mnth = 10; break;
      case "November":
          mnth = 11; break;
      case "December":
          mnth = 12; break;
  }    

  var year = parseInt(this.props.dateyear);
  var day = parseInt(this.props.datestartday);
  
  // change styling depending when event occurs
    if (year >= today.getFullYear() && 
       mnth >= (today.getMonth() + 1)) {

      if (mnth == today.getMonth() + 1) {
        if (day >= today.getDate()){
        styling = "future-event";
        }
      }
      else {
        styling = "future-event";
      }
    }

    // create display date
    ev_date = this.props.datemonth + " " + this.props.datestartday; 
    if (this.props.dateendday.length > 0) {
      ev_date = ev_date + "-" + this.props.dateendday;
    }
    ev_date = ev_date + " " + this.props.dateyear;

    // state object
    this.state = {title: this.props.title, pic : this.props.pic , 
      desc: this.props.desc, date: ev_date,
       time: this.props.time, location: this.props.location, 
       link: this.props.link, styling: styling, page:this.props.page, 
       currentPage: this.props.currentPage, 
        popupContent: this.props.popupContent}

  }

  render() {
    var currentPage = this.props.currentPage;
    var popupContent= this.state.popupContent;
    return(
      <Popup 
      trigger = {
          <div className={this.state.styling + " Event "}>
            <img className="event-img" src={this.state.pic} alt="event image" />
            <div className="event-info"> 
              <div className="event-title event-item"> 
                <span className="event-title-text"> {this.state.title} </span>
              </div>
              <div className="event-desc event-item"> 
                <span className="event-desc-text"> {this.state.desc} </span>
              </div>
              <div className="event-date event-item"> 
                <img className="about-item-ev" src={calendar}  alt="location icon" />
                <span className="event-date-text"> {this.state.date} </span>
              </div>
              <div className="event-time event-item"> 
                <img className="about-item-ev" src={clock} alt="clock icon" />
                <span className="event-time-text"> {this.state.time} </span> 
              </div>
              <div className="event-location event-item"> 
                <img className="about-item-ev" src={location} alt="location icon" />
                <span className="event-location-text"> {this.state.location} </span>  
              </div>
            </div>
        </div> } 
    modal
    closeOnDocumentClick
    contentStyle={contentStyle}>
      <div className="popup-content">
      <h1>  {this.state.title} </h1>
      { /*<img className="event-img-popup" src={this.state.pic} alt="event image" /> */}
      <div className="popup-event-items">
              <div className="event-date event-item-p"> 
                <img className="about-item-ev" src={calendar}  alt="location icon" />
                <span className="event-date-text"> {this.state.date} </span>
              </div>
              <div className="event-time event-item-p"> 
                <img className="about-item-ev" src={clock} alt="clock icon" />
                <span className="event-time-text"> {this.state.time} </span> 
              </div>
              <div className="event-location event-item-p"> 
                <img className="about-item-ev" src={location} alt="location icon" />
                <span className="event-location-text"> {this.state.location} </span> 
              </div>
      </div>
      <div dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(popupContent)}}>
       </div> 
      </div>
    </Popup>
    );
  }

}

export default Events;
