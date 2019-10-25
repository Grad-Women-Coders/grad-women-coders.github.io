import React, { Component } from 'react';

import person_email from './person_email.png';
import person_git from './person_git.png';
import person_linkedin from './person_linkedin.png';
import ritika from './team_photos/ritika.jpeg';
import anita from './team_photos/anita.jpeg';
import hiral from './team_photos/hiral.jpeg';
import isha from './team_photos/isha.jpeg';
import nishtha from './team_photos/nishtha.jpg';
import vander_laan from './team_photos/vander_laan.jpg';
import jamel from './team_photos/jamel.jpg';
import hodgkin from './team_photos/hodgkin.jpg';

import { Carousel } from 'react-responsive-carousel';

class Team extends Component {
  constructor(props) {
    super(props);
    this.state = { hidePhoto:true}
    this.hoverOn= this.hoverOn.bind(this)
    this.hoverOff= this.hoverOff.bind(this)
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
          <div className="team-cover-text" onMouseOver={this.hoverOn} onMouseOut={this.hoverOff}>
          Meet the GWC Team
          </div>
        </div>
        <div className="People">
          <Person name="Ritika Gupta" title="President" pic={ritika} git="https://github.com/rtkgupta"
                  email="gupta.ritika@husky.neu.edu" link="https://www.linkedin.com/in/rtkgupta/"/>
          <Person name="Hiral Rathod" title="Vice President" pic={hiral} git=""
                  email="rathod.hi@husky.neu.edu" link="http://linkedin.com/in/hiral-rathod"/>
          <Person name="Isha Barot" title="Secretary / Public Relations" pic={isha} git="https://github.com/barot-isha/"
                  email="barot.i@husky.neu.edu" link="https://www.linkedin.com/in/isha-barot/"/>
          <Person name="Anita Preko" title="Treasurer" pic={anita} git=""
                  email="preko.a@husky.neu.edu" link="https://www.linkedin.com/in/anita-preko-05812ab5/"/>
          <Person name="Nishtha Dutta" title="Web Design" pic={nishtha} git="https://github.com/nishtha-dutta"
                  email="dutta.ni@husky.neu.edu" link="https://www.linkedin.com/in/nishtha-dutta"/>
          <Person name="Dean Doreen Hodgkin" title="Mentor" pic={hodgkin} git=""
                  email="d.hodgkin@northeastern.edu" link=""/>
          <Person name="Kathi Vander Laan" title="Advisor" pic={vander_laan} git=""
                  email="k.vanderlaan@neu.edu" link=""/>
          <Person name="Nada Aladdin Jamel" title="Advisor" pic={jamel} git=""
                  email="n.naji@northeastern.edu" link=""/>
        </div>
        <div className="team-cover-text team-photo-text">
              Team Photos
          </div>
        <div className="Carousel-div">
          <Carousel showArrows={true}>
              <div>
                <img src={require("./carousel-photos/image1.jpg")} alt="" />
                <p className="legend">Organizing Committee Spring 2018 </p>
              </div>
              <div>
                <img src={require("./carousel-photos/image2.jpg")} alt="" />
                <p className="legend">Organizing Committee Fall 2017 </p>
              </div>
              <div>
                <img src={require("./carousel-photos/image3.jpg")} alt="" />
                <p className="legend">Organizing Committee Summer 2017 </p>
              </div>
              <div>
                <img src={require("./carousel-photos/image4.jpg")} alt="" />
                <p className="legend">Organizing Committee Spring 2017 </p>
              </div>
              <div>
                <img src={require("./carousel-photos/image5.png")} alt="" />
                <p className="legend">Organizing Committee Fall 2016 </p>
              </div>
              <div>
                <img src={require("./carousel-photos/image6.jpg")} alt="" />
                <p className="legend">Organizing Committee Summer 2016 </p>
              </div>
          </Carousel>
        </div>
      </div>
    );
  }
}

class Person extends Component {
  constructor(props) {
    super(props);
    this.state = { name:this.props.name, title:this.props.title, pic: this.props.pic,
                  email: this.props.email, git: this.props.git, link: this.props.link,
                  iconsize: "", bigprofile: ""}

    this.hoverAction = this.hoverAction.bind(this);
    this.hoverOut = this.hoverOut.bind(this);
    this.email = React.createRef();
  }

  hoverAction() {
    this.setState({
      iconsize: "big-icons",
      bigprofile: "big-profile"
    });
  }

  hoverOut() {
    this.setState({
      iconsize: "",
      bigprofile: ""
    });
  }

  displayItem(item) {
    if (item.length > 0) {
      return true;
    }
    else {
      return false;
    }
  }

  render() {
    return (
      <div className="Person dark-background blue-color" onMouseOver={this.hoverAction} onMouseOut={this.hoverOut}>
        <div className="person-item">
          <img className={this.state.bigprofile + " profile"} src={this.state.pic}  alt="person profile" />
        </div>
        <div className="person-item person-name"> {this.state.name} </div>
        <div className="person-item person-title"> {this.state.title} </div>
        <div className="person-item person-contact-items" >
            < div className="person-contact-item"  hidden={!this.displayItem(this.state.email)}>
                <a href={"mailto:" + this.state.email}>
                <img className={this.state.iconsize + " person-img person-email"} src={person_email} alt="email link"/>
                </a>
            </div>
            < div className="person-contact-item"  hidden={!this.displayItem(this.state.git)}>
                <a href={this.state.git}>
                <img id="git" className={this.state.iconsize + " person-git person-img"} src={person_git} alt="git link"/>
                </a>
            </div>
            < div className="person-contact-item"  hidden={!this.displayItem(this.state.link)}>
                <a href={this.state.link}>
                <img id="link" className={this.state.iconsize + " person-link person-img"} src={person_linkedin} alt="linkedin link"/>
                </a>
            </div>
        </div>
      </div>
    );

  }


}

export default Team;
