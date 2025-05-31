import React, { useState } from 'react';
import '../assets/css/style.css';
import { NavLink } from 'react-router-dom';

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
          <a href="/">
            <img src="/logo.jpg" alt="Logo" className="logo-image" style={{ width: '70px', height: '70px' }} />
          </a>
        </div>
        <nav className="main-nav">
          <button
            className="mobile-menu-toggle"
            aria-label="Toggle menu"
            onClick={toggleMobileMenu} // ← add this
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>

          <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>

            <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>About Us</NavLink>
            </li>
            <li>
              <NavLink to="/blog" className={({ isActive }) => (isActive ? 'active' : '')}>Blog</NavLink>
            </li>
            <li>
              <NavLink to="/vlogs" className={({ isActive }) => (isActive ? 'active' : '')}>Vlogs</NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>Contact</NavLink>
            </li>
          </ul>
        </nav>
        {/* <button id="language-toggle" className="lang-toggle" onClick={handleLanguageToggle}>
          မြန်မာ
        </button> */}
      </div>
    </header>
  );
}

export default Header;