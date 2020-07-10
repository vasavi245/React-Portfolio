import React, { Component } from "react";
import "./Styles/Portfolio.css";

// Portfolio component
export default class Portfolio extends Component {
  render() {
    let data = this.props.data;
    return (
      <section id="portfolio" className="bg-light">
        <h1 className="heading text-center font-italic">Portfolio</h1>
        <h3 className="text-muted font-italic">Some of my latest work</h3>

        {data.projects.map((items) => {
          return (
            <div className="container">
              <div className="card">
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
            </div>
          );
        })}
      </section>
    );
  }
}
