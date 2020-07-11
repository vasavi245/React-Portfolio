import React, { Component } from "react";
import image from "./Images/port-image.jpg";
import profileimage from "./Images/sindhu-image.jpg";
import data from "./myData";
import "./Styles/About.css";

// About component
class About extends Component {
  render() {
    return (
      <div id="about">
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <img src={image} alt="about" className="img-fluid" />
            <hr id="break" />
            <p className=" whatido text-center text-warning">
              HTML/CSS | Bootstrap | React | NodeJs | express | MySQL | MongoDB
            </p>
            <div className="social">
              {data.socialLinks.map((item) => {
                return (
                  <a
                    key={item.name}
                    href={item.url}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i className={item.className}></i>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <section className="container text-center">
          <h1 className="aboutme-heading text-center font-bold font-italic">
            About Me
          </h1>
          <img src={profileimage} alt="profile" className="rounded-circle" />
          <p className="myinfo  font-weight-bold">
            I am Vasavi, graduated from JNT University with Becholer of Computer
            Science and Engineering in 2011.Currently Pursuing certificate of
            Full Stack Development (Coding Bootcamp) with University of Western
            Australia.
          </p>
          <p className="myinfo  font-weight-bold">
            Passionate about software developing, experiences that are intuitive
            and make technology more accessible to everyone.Few of my key
            abilities include, handling complex challenges with ease, attention
            to detail, assessing situations and proposing well considered
            solutions, I enjoy developing solutions that address the challenges.
          </p>
        </section>
        <hr className="divider" />
      </div>
    );
  }
}

export default About;
