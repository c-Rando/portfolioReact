import React from 'react';
import image from "./me.jpg";
import "./index.css";

function About(props) {
    return (
      <div>
        <img className="avatar" src={image} />
        <p className="bio">
          Hello, I'm Chris, and I love coding, dogs, video games, and food! I wouldn't say that is all there is to me, but
          that sums up all of the important parts. I have worked many different jobs since I first started working. I
          believe that this
          factor has enabled me to become highly adaptive.
          Here is a brief description of my work experiences and something I feel that I gained from those experiences.
        </p>
      </div>
    );
  };

export default About;