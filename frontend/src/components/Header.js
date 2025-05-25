import React, { useState } from 'react';
import './../assets/css/style.css'; // Make sure the path is correct relative to Header.js

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // You might want to implement language toggle logic here or in a higher-level context
  const handleLanguageToggle = () => {
    alert("Language toggle functionality to be implemented!");
  };

  return (
    <header className="site-header">
      <div className="container">
        <div className="logo">
          <a href="/">Can'twait2say</a> {/* Use '/' for home in React Router */}
        </div>
        <nav className="main-nav">
          <button className="mobile-menu-toggle" aria-label="Toggle menu" onClick={toggleMobileMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
          <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
            <li><a href="/" className="active">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/vlogs">Vlogs</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
        <button id="language-toggle" className="lang-toggle" onClick={handleLanguageToggle}>
          မြန်မာ
        </button>
      </div>
    </header>
  );
}

export default Header;