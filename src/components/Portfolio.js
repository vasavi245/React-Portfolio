import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import "./Styles/Portfolio.css";

// Portfolio component
export default class Portfolio extends Component {
  render() {
    let data = this.props.data;
    return (
      <>
        {data.projects.map((items) => {
          return (
            <Fade left key={items.id}>
              <div className="card">
                <div className="img-container">
                  <img
                    src={items.image}
                    alt={items.title}
                    className="port-image"
                  />
                  <div className="middle">
                    <div className="text">
                      <a
                        href={items.appurl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Website
                      </a>
                    </div>
                  </div>
                </div>
                <div className="content">
                  <ul>
                    <li>{items.title}</li>
                    <li className="text-muted">{items.technology}</li>
                    <li>
                      <a
                        href={items.githuburl}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Github Repository
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </Fade>
          );
        })}
      </>
    );
  }
}
