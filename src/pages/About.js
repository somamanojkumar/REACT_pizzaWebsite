import React from 'react';
import MultiplePizzas from '../assests/cover.jpg';
import '../styles/About.css';

function About() {
  return (
    <div className="about">
      <div className="aboutTop" style={{ backgroundImage:`url(${MultiplePizzas})` }}></div>
      <div className="aboutBottom">
        <h1>About Us</h1>
        <p>Pizza Paradiso understands the importance of providing complete and accurate nutrition 
          information to our customers. Because every customer uses nutrition information differently, 
          we provide three ways to view our nutrition information.</p>
      </div>
      
    </div>
  )
}

export default About
