import React, { Component } from 'react';
import "./Styles/Portfolio.css";

import data from "./myData"

export default class Portfolio extends Component {
    state = { }
    render() {
        return(
            <section id="portfolio" className="bg-light">
                <div className="container">
                <h1 className="heading text-center font-italic">Portfolio</h1>
                <h3 className="text-muted font-italic">Some of my latest work</h3>
                
                <div className="row justify-content-start">
               
                  {
                    data.projects.map(items => {
                     return(
                        <div className="col-md-4 col-sm-6 portfolio-item">
                                <a href={items.appurl} rel="noopener noreferrer" target="_blank" key={items.title} className="portfolio-link">
                                    <div className="portfolio-hover">
                                        <div className="portfolio-hover-content">
                                            <i className="fa fa-plus fa-3x"></i>
                                        </div>
                                    </div>
                                    <img src={items.image} className="img-responsive project-image" alt="portfolio" />
                                </a>
                                <div className="portfolio-caption">
                                    <h4>{items.title}</h4>
                                    <p className="text-muted">{items.technology}</p>
                                </div>
                                </div>
                          
                        
                     )
                })
            }
                
              </div>  
              </div> 
             </section>
        )
    }
}