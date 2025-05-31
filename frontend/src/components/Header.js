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
    <header class="site-header">
      <div class="container">
        <div class="logo">
          <a href="/">
            <img src="/logo.jpg" alt="Logo" class="logo-image" style={{ width: '70px', height: '70px' }} />
          </a>
        </div>
        <nav class="main-nav">
          <button
            class="mobile-menu-toggle"
            aria-label="Toggle menu"
            onClick={toggleMobileMenu} // ← add this
          >
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </button>

          <ul class={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>

            <li>
              <NavLink to="/" class={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" class={({ isActive }) => (isActive ? 'active' : '')}>About Us</NavLink>
            </li>
            <li>
              <NavLink to="/blog" class={({ isActive }) => (isActive ? 'active' : '')}>Blog</NavLink>
            </li>
            <li>
              <NavLink to="/vlogs" class={({ isActive }) => (isActive ? 'active' : '')}>Vlogs</NavLink>
            </li>
            <li>
              <NavLink to="/contact" class={({ isActive }) => (isActive ? 'active' : '')}>Contact</NavLink>
            </li>
          </ul>
        </nav>
        {/* <button id="language-toggle" class="lang-toggle" onClick={handleLanguageToggle}>
          မြန်မာ
        </button> */}
      </div>
    </header>
  );
}

export default Header;