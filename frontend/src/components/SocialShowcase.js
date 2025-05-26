import React from 'react';
import './../assets/css/style.css';

function SocialShowcase() {
  return (
    <section className="social-showcase">
      <div className="container">
        <h2 className="section-title" data-lang="follow">Follow Our Journey</h2>
        <div className="social-links">
          <a href="https://www.youtube.com/@cantwait2say-d8p" className="social-btn youtube" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-youtube"></i> YouTube
          </a>
          <a href="https://www.facebook.com/cantwait2say" className="social-btn facebook" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i> Facebook
          </a>
          <a href="https://www.tiktok.com/@cantwait2say0" className="social-btn tiktok" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-tiktok"></i> TikTok
          </a>
          <a href="https://www.instagram.com/YOUR_HANDLE" className="social-btn instagram" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i> Instagram
          </a>
        </div>
      </div>
    </section>
  );
}

export default SocialShowcase;