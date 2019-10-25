import React, { Component } from 'react';
import calendar from './common/calendar.png';
import clock from './common/clock.png';
import location from './common/location.png';

import wayfaireventfall2018 from './events_pics/google.jpeg';
import googleyoutubedinnerfall2018 from './events_pics/crd.jpeg';

import {const_wayfairnetworking2018, const_googledinnerandyoutubepanel2018,
} from './Events_Info.js';

import Popup from "reactjs-popup";
import DOMPurify from 'dompurify'
import './common/header.css';

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

  render() {
    return (
      <div className="App">
        <div className="Events-Header">

          <div className="events-pages">
            <button className={ "events-tag-button " + this.state.page1Style} onClick={this.onPage1Click} > 1 </button>
            {/* <button className={ "events-tag-button " + this.state.page2Style} onClick={this.onPage2Click} > 2 </button> */}
          </div>
        </div>
        <div className="Events" hidden={this.state.isPage1Hidden}>
          <div className="events-cover-text future-events-header">
          Upcoming Events
          </div>
          <div className="futureEvents">
        <Event currentPage= {this.state.currentPage}
                  title= {const_wayfairnetworking2018.title} pic={wayfaireventfall2018}
                  desc={const_wayfairnetworking2018.desc}
                  dateyear={const_wayfairnetworking2018.dateyear} datemonth={const_googledinnerandyoutubepanel2018.datemonth}
                  datestartday={const_wayfairnetworking2018.datestartday} dateendday={const_googledinnerandyoutubepanel2018.dateendday}
                  time={const_wayfairnetworking2018.time} location={const_googledinnerandyoutubepanel2018.location}
                  popupContent= {const_wayfairnetworking2018.popupContent} />
          </div>
        </div>
          <div className="events-cover-text past-events-header">
          Past Events
          </div>
          <div className="Events">
            <div className="page1" hidden={this.state.isPage1Hidden} >
            <Event currentPage= {this.state.currentPage}
                    title= {const_googledinnerandyoutubepanel2018.title} pic={googleyoutubedinnerfall2018}
                    desc={const_googledinnerandyoutubepanel2018.desc}
                    dateyear={const_googledinnerandyoutubepanel2018.dateyear} datemonth={const_googledinnerandyoutubepanel2018.datemonth}
                    datestartday={const_googledinnerandyoutubepanel2018.datestartday} dateendday={const_googledinnerandyoutubepanel2018.dateendday}
                    time={const_googledinnerandyoutubepanel2018.time} location={const_googledinnerandyoutubepanel2018.location}
                    popupContent= {const_googledinnerandyoutubepanel2018.popupContent} />
            </div>
        </div>
        <div className="events-pages bottom"  >
            <button className={ "events-tag-button " + this.state.page1Style} onClick={this.onPage1Click} > 1 </button>
            {/* <button className={ "events-tag-button " + this.state.page3Style} onClick={this.onPage2Click} > 2 </button> */}
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
      default:
          mnth = 12; break;
  }

  var year = parseInt(this.props.dateyear, 10);
  var day = parseInt(this.props.datestartday, 10);

  // change styling depending when event occurs
    if (year >= today.getFullYear() &&
       mnth >= (today.getMonth() + 1)) {

      if (mnth === today.getMonth() + 1) {
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
    var popupContent= this.state.popupContent;
    return(
      <Popup
      trigger = {
          <div className={this.state.styling + " Event "}>
            <img className="event-img" src={this.state.pic} alt="" />
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
      <div className="popupText" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(popupContent)}}>
       </div>
      </div>
    </Popup>
    );
  }

}

export default Events;
