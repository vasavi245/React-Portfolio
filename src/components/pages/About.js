import React,{ Component } from 'react';
import image from "../Images/port-image.jpg";
import data from "../myData"
import "../Styles/About.css";

class About extends Component {
   render() {
       
    return(
      <div className="jumbotron jumbotron-fluid">
          <div className="container">
          <img src={image} alt="about" className="img-fluid" />
          <hr className="break" />
          <p className=" whatido text-center text-warning">HTML/CSS | Bootstrap | React | NodeJs | express | MySQL | MongoDB</p>
           <div className="social">
              {
                data.socialLinks.map(item => {
                  return(
                      
                          <a key={item.name} href={item.url} rel="noopener noreferrer" target="_blank"><i className={item.className}></i></a>
                      
                  )
              })
              }
           </div>
          </div>
      </div>
    );
}
}

export default About;