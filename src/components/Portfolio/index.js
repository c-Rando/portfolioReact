import React from 'react';
import "./index.css";
import image from "./images/medrect.png";

function Portfolio(props) {
    return (
      <div>
        <h1>Portfolio {props.name}</h1>
        
        <div className="portfolio">
          <div className="portfolio-item">
            <a className="project" href="#">Project</a>
            <a className="github" href="#">Github</a>
            <img src={image} alt="proj-image" />
          </div>

          <div className="portfolio-item">
            <a className="project" href="#">Project</a>
            <a className="github" href="#">Github</a>
            <img src={image} alt="proj-image" />
          </div>

          <div className="portfolio-item">
            <a className="project" href="#">Project</a>
            <a className="github" href="#">Github</a>
            <img src={image} alt="proj-image" />
          </div>

        </div>

        <br/>

        <div className="portfolio">

         <div className="portfolio-item">
            <a className="project" href="#">Project</a>
            <a className="github" href="#">Github</a>
            <img src={image} alt="proj-image" />
          </div>
          
          <div className="portfolio-item">
            <a className="project" href="#">Project</a>
            <a className="github" href="#">Github</a>
            <img src={image} alt="proj-image" />
          </div>
          
          <div className="portfolio-item">
            <a className="project" href="#">Project</a>
            <a className="github" href="#">Github</a>
            <img src={image} alt="proj-image" />
          </div>

        </div>

      </div>
    );
  };

export default Portfolio;