import React, { useState, useEffect } from 'react';
import './Header.css';
import { BOOKING_FORM_URL } from '../../constants/booking';


const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [bgOpacity, setBgOpacity] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
            setBgOpacity(window.scrollY > 50 ? 0.5 : 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleNavClick = (e) => {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    return (
        <header
            className={`header ${isScrolled ? 'scrolled' : ''}`}
            style={{
                backgroundColor: `rgba(0,0,0,${bgOpacity})`,
                transition: 'background-color 0.3s cubic-bezier(0.4,0,0.2,1), padding 0.3s'
            }}
        >
            <div className="container">
                <div className="logo">
                    <a href="#home" onClick={handleNavClick}>
                        <img className="logo-icon" width="40" height="40" src="/images/Bonita-new-image.png" />
                        <span className="logo-text">Bonita Carwash</span>
                    </a>
                </div>
                <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
                    <ul className="nav-links">
                        <li><a href="#home" onClick={handleNavClick}>Home</a></li>
                        <li><a href="#services" onClick={handleNavClick}>Services</a></li>
                        <li><a href="#gallery" onClick={handleNavClick}>Gallery</a></li>
                        <li><a href="#pricing" onClick={handleNavClick}>Pricing</a></li>
                        <li><a href="#about" onClick={handleNavClick}>About Us</a></li>
                        <li><a href="#testimonials" onClick={handleNavClick}>Reviews</a></li>
                        <li><a href="#contact" onClick={handleNavClick}>Contact</a></li>
                    </ul>
                </nav>
                <button
                    className="btn btn-primary book-now"
                    onClick={() => window.open(BOOKING_FORM_URL, '_blank')}
                >
                    Book Now
                </button>
                <button className="mobile-menu-btn" onClick={toggleMenu}>
                    <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                </button>
            </div>
        </header>
    );
};

export default Header; 