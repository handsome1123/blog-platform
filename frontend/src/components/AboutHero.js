// src/components/AboutHero.js
import React from 'react';
import aboutImage from '../assets/images/about-us.jpg';

const AboutHero = () => {
  return (
    <section className="about-hero">
      <img src={aboutImage} alt="About Us" className="about-hero-image" />
      <div className="about-hero-text">
        <h1>About Can'twait2say</h1>
        <p>Exploring Myanmar culture, stories, and life abroad.</p>
      </div>
    </section>
  );
};

export default AboutHero;
