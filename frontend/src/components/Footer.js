import React from 'react';
import './../assets/css/style.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h3>Can'twait2say</h3>
            <p data-lang="footer-tagline">Sharing Myanmar's cultural heritage with the world</p>
          </div>
          <div className="footer-links">
            <h4 data-lang="quick-links">Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/vlogs">Vlogs</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h4 data-lang="get-in-touch">Get In Touch</h4>
            <p><i className="far fa-envelope"></i> hello@canttwait2say.com</p>
            <div className="footer-social">
              <a href="https://www.youtube.com/@cantwait2say-d8p" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
              <a href="https://www.facebook.com/cantwait2say" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
              <a href="https://www.tiktok.com/@cantwait2say0" target="_blank" rel="noopener noreferrer"><i className="fab fa-tiktok"></i></a>
              <a href="https://www.instagram.com/YOUR_HANDLE" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Can'twait2say. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;