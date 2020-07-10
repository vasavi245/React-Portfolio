import React, { Component } from "react";
import data from "./myData";
import "./Styles/Footer.css";

// footer
export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="row text-center">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
              <div className="footer-social">
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
      </footer>
    );
  }
}
