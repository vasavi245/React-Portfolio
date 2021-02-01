import React, { Component } from "react";
import data from "./myData";
import "./Styles/Header.css";

class Header extends Component { 
  render() {
    return (
      // Navbar
      <header id="home">
        <nav id="nav" className="navbar navbar-expand-lg navbar-fixed-top affix-top" >
          <div className="container">
            <button
              className="navbar-toggler text-warning"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              Menu
            </button>

            <a href="#home" className="navbar-brand ">
              <h1 className="font-italic">Vasavi</h1>
            </a>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item ">
                  <a href="#about"  className="nav-link">
                    About Me
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#portfolio" className="nav-link">
                    Portfolio
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#contact" className="nav-link">
                    Contact
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href={data.resume}
                    target="_blannk"
                    rel="noopener noreferrer"
                    className="nav-link"
                  >
                    Resume
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href={data.coverletter}
                    target="_blannk"
                    rel="noopener noreferrer"
                    className="nav-link"
                  >
                    Cover Letter
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
