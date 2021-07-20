import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import ContactInfo from '../ContactInfo';
import Portfolio from '../Portfolio';
import Resume from '../Resume';
import About from '../About';
import './index.css';

function Navbar(props) {
  return (
    <Router>
     <main>
       <nav className="NavStyle">
         <ul className="header">
           <li><h3 className="dev-name">Chris Rando</h3></li>
           <li><NavLink exact to="/">Home</NavLink></li>
           <li><NavLink to="/about">About</NavLink></li>
           <li><NavLink to="/portfolio">Portfolio</NavLink></li>
           <li><NavLink to="/resume">Resume</NavLink></li>
           <li><NavLink to="/contact">Contact</NavLink></li>
         </ul>
      </nav>
  
      <div className="content">
        <Route path="/" exact component={ContactInfo} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={ContactInfo} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/resume" component={Resume} />
      </div>
 
      </main>
    </Router>
  );
};

export default Navbar;