import React from 'react';
import "./index.css";

function Resume(props) {
    return (
      <div className="resume">
        <h1>Resume {props.name}</h1>

        <br/>
        <a href="#">Click here to download my resume</a>

        <br/>
        <h3>Developer Proeficiencies</h3>

        <ul className="proeficiencies">
          <li>Javascript</li>
          <li>NodeJS</li>
          <li>SQL</li>
          <li>React</li>
        </ul> 
      </div>
    );
  };

export default Resume;