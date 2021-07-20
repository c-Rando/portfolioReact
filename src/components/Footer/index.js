import React from 'react';
import "./index.css";

function Footer(props) {
  return (
    <div className="footer">
      <h1>Footer {props.name}</h1>
    </div>
  );
};

export default Footer;