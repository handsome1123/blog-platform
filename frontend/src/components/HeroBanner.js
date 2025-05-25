import React from 'react';
import './../assets/css/style.css';

function HeroBanner() {
  return (
    <section className="hero-banner">
      <div className="container">
        <div className="hero-content">
          <h1 data-lang="hero-title">Can'twait2say</h1>
          <h2 data-lang="hero-tagline">Exploring Myanmar Culture, History & Life Abroad</h2>
          <a href="#latest-video" className="cta-button" data-lang="watch-latest">Watch Latest Video</a>
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;