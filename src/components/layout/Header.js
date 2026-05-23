import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import { NAV_LINKS } from '../../constants/siteData';
import { openBookingForm } from '../../utils/booking';

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

    const handleNavClick = () => {
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
                    <Link to="/" onClick={handleNavClick}>
                        <img
                            className="logo-icon"
                            width="40"
                            height="40"
                            src="/images/Bonita-new-image.png"
                            alt="Bonita Carwash Logo"
                        />
                        <span className="logo-text">Bonita Carwash</span>
                    </Link>
                </div>

                <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
                    <ul className="nav-links">
                        {NAV_LINKS.map((item) => (
                            <li key={item.path}>
                                <NavLink
                                    to={item.path}
                                    onClick={handleNavClick}
                                    className={({ isActive }) => (isActive ? 'active-nav-link' : '')}
                                >
                                    {item.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>

                <button
                    className="btn btn-primary book-now"
                    onClick={() => openBookingForm()}
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
