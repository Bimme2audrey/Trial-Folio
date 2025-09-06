import React, { useState, useEffect } from 'react';
import './Header.css';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="navbar">
          <div className="navbar-brand">
            <a href="#home">
              <i className="fa fa-code"></i>
              <span>Dev<sub>Bimme</sub></span>
            </a>
          </div>
          
          <button 
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className="fa fa-bars"></i>
          </button>

          <nav className={`navbar-nav ${isMobileMenuOpen ? 'open' : ''}`}>
            <ul>
              <li><a onClick={() => scrollToSection('about')}>About</a></li>
              <li><a onClick={() => scrollToSection('education')}>Education</a></li>
              <li><a onClick={() => scrollToSection('skills')}>Skills</a></li>
              <li><a onClick={() => scrollToSection('portfolio')}>Portfolio</a></li>
              <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
              <li><ThemeToggle /></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
