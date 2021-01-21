import React, { Component } from "react";
import image from "./Images/port-image.jpg";
import profileimage from "./Images/sindhu-image.jpg";
import Fade from "react-reveal/Fade";
import data from "./myData";
import "./Styles/About.css";

// About component
class About extends Component {
  render() {
    return (
      <div id="about">
        <section className="container text-center">
          <h1 className="aboutme-heading text-center font-bold font-italic">
            About Me
          </h1>
          <Fade top>
            <img src={profileimage} alt="profile" className="rounded-circle" />
          </Fade>
          <div className="info">
          <p className="myinfo  font-weight-bold">
            I am Vasavi, graduated from JNT University with Becholer of Computer
            Science and Engineering in 2011. Pursued certificate of
            Full Stack Development (Coding Bootcamp) with The University of Western
            Australia.
          </p>
          <p className="myinfo  font-weight-bold">
            Passionate about software developing, experiences that are intuitive
            and make technology more accessible to everyone.Few of my key
            abilities include, handling complex challenges with ease, attention
            to detail, assessing situations and proposing well considered
            solutions, I enjoy developing solutions that address the challenges.
          </p>
          </div>
        </section>
        <hr className="divider" />
      </div>
    );
  }
}

export default About;
