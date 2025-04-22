import React, { useState } from 'react';
import './Header.css';
import { Icon } from '@iconify/react';
import cvFile from '../assets/Ngoc-Lam-Nhi-Nguyen-CV.pdf';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-name">Nhi</div>
      
      <div className="menu-icon" onClick={toggleMenu}>
        {isMenuOpen ? (
          <Icon icon="material-symbols:close" width="24" height="24" />
        ) : (
          <Icon icon="heroicons:bars-3" width="24" height="24" />
        )}
      </div>
      
      <div className={`nav-container ${isMenuOpen ? 'active' : ''}`}>
        <nav className="header-nav-center">
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
        <div className="header-cv-container">
          <a 
            href={cvFile} 
            target="_blank" 
            rel="noopener noreferrer"
            className="header-cv-button"
            onClick={closeMenu}
          >
            View My CV
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;