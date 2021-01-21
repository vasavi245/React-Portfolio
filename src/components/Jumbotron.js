import React, { Component } from "react";
import image from "./Images/port-image.jpg";
import profileimage from "./Images/sindhu-image.jpg";
import Fade from "react-reveal/Fade";
import data from "./myData";
import "./Styles/About.css";

class Jumbotron extends Component {
    render() {
      return (
        <div id="jumbo">
          <div className="jumbotron jumbotron-fluid">
            <div className="container">
              <Fade left>
                <img src={image} alt="about" className="img-fluid" />
              </Fade>
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
          </div>
          
      );
    }
  }
  
  export default Jumbotron;
  
