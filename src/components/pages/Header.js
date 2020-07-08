import React from 'react';
import "../Styles/Header.css";

function Header() {
    return (
     // Navbar
      <header id="home">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <button 
             className="navbar-toggler text-warning"
             type="button"
             data-toggle="collapse"
             data-target="#navbarNav"
             aria-expanded="false" aria-label="Toggle navigation"
            >
              Menu
              
            </button>
            <a href="#home" className="navbar-brand ">
              <h1 className="font-italic">Vasavi</h1>
            </a> 
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item ">
                <a href="#aboutme" className="nav-link" >About Me</a>
              </li>
              <li className="nav-item">
                <a href="#portfolio" className="nav-link" >Portfolio</a>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link" >Contact</a>
              </li>
            </ul>
            </div>
          </div>
        </nav>
      </header>
      

    );

}

export default Header;