import React, { Component } from "react";
import "./Styles/Portfolio.css";

// Portfolio component
export default class Portfolio extends Component {
  render() {
    let data = this.props.data;
    return (
      <>
        {data.projects.map((items) => {
          return (
            <div className="card ">
              <div className="img-container">
                <a
                  href={items.appurl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={items.image} alt={items.title} />
                </a>
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
          );
        })}
      </>
    );
  }
}
