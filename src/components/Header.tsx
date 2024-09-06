import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../styles/Header.css'; // Make sure this path is correct

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src='https://github.com/jpcardozx/personal-portfolio/blob/main/assets/cdmp%20(1).png?raw=true' alt="Logo" />
          </Link>
        </div>
        
        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
            <li><a href="#projects" className={location.hash === '#projects' ? 'active' : ''}>Projects</a></li>
            <li><a href="#skills" className={location.hash === '#skills' ? 'active' : ''}>Skills</a></li>
            <li><a href="#contact" className={location.hash === '#contact' ? 'active' : ''}>Contact</a></li>
          </ul>
        </nav>
        
        <button className={`menu-toggle ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="hamburger"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;