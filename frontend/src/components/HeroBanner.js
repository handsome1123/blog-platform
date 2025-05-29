import React from 'react';
import './../assets/css/style.css';

export default function HeroBanner({ data }) {
  return (
    <section className="hero-banner">
      <div className="container">
        <div className="hero-content">
          <h1 data-lang="hero-title">{data.heroTitle}</h1>
          <h2 data-lang="hero-tagline">{data.heroSubtitle}</h2>
          <a href="#latest-video" className="cta-button" data-lang="watch-latest">Watch Latest Video</a>
        </div>
      </div>
    </section>
  );
}





