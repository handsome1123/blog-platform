import React from 'react';
import './../assets/css/style.css';

function LatestVideo() {
  return (
    <section id="latest-video" className="featured-video">
      <div className="container">
        <h2 className="section-title" data-lang="latest-episode">Latest Episode</h2>
        <div className="video-container">
          <iframe width="914" height="514" src="https://www.youtube.com/embed/xxpPvSYlcWs" title="ဘန်ကောက်က အမျိုးများနှင့် နှစ် ၅၀၀ ကအမွေ | Official Vlog Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          {/* <iframe
            src="https://www.youtube.com/watch?v=xxpPvSYlcWs" // Replace with actual YouTube embed URL
            title="Featured Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe> */}
        </div>
        <div className="video-description">
          <h3 data-lang="video-title">Traditional Burmese Food in Bangkok</h3>
          <p data-lang="video-description">Join us as we explore authentic Burmese restaurants in Bangkok and learn how Myanmar expats keep their culinary traditions alive.</p>
        </div>
        <a href="https://www.youtube.com/@cantwait2say-d8p" className="cta-button youtube" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-youtube"></i> <span data-lang="subscribe">Subscribe on YouTube</span>
        </a>
      </div>
    </section>
  );
}

export default LatestVideo;