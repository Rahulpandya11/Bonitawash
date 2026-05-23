import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { CONTACT_DETAILS, NAV_LINKS } from '../../constants/siteData';

const Footer = () => {
    const quickLinks = NAV_LINKS.map((item) => ({ text: item.label, href: item.path }));

    const services = [
        { text: 'Ultra Detail', href: '/pricing' },
        { text: 'Luxury Detail', href: '/pricing' },
        { text: 'Super Detail', href: '/pricing' },
        { text: 'Wax Polishing', href: '/services' },
        { text: 'Ceramic Coating', href: '/services' }
    ];

    const socialLinks = [
        { icon: 'fab fa-facebook-f', href: '#' },
        { icon: 'fab fa-twitter', href: '#' },
        { icon: 'fab fa-instagram', href: '#' },
        { icon: 'fab fa-yelp', href: '#' }
    ];

    return (
        <footer className="footer">
            <div className="main-container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3 className="footer-title">Bonita Carwash</h3>
                        <p className="footer-description">
                            Premium car care services with attention to detail and eco-friendly products.
                        </p>
                        <div className="social-links">
                            {socialLinks.map((link, index) => (
                                <a 
                                    key={index}
                                    href={link.href}
                                    className="social-link"
                                >
                                    <i className={link.icon}></i>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="footer-section">
                        <h3 className="footer-title">Quick Links</h3>
                        <ul className="footer-links">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <Link to={link.href}>{link.text}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h3 className="footer-title">Services</h3>
                        <ul className="footer-links">
                            {services.map((service, index) => (
                                <li key={index}>
                                    <Link to={service.href}>{service.text}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h3 className="footer-title">Contact & Hours</h3>
                        <ul className="footer-contact-list">
                            <li>{CONTACT_DETAILS.address}</li>
                            <li>
                                <a href={`tel:${CONTACT_DETAILS.phoneDial}`}>{CONTACT_DETAILS.phoneDisplay}</a>
                            </li>
                            <li>{CONTACT_DETAILS.schedule}</li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Bonita Carwash & Maintenance. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 
