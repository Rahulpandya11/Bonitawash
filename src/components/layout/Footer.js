import React from 'react';
import './Footer.css';

const Footer = () => {
    const quickLinks = [
        { text: 'Home', href: '#home' },
        { text: 'Services', href: '#services' },
        { text: 'Pricing', href: '#pricing' },
        { text: 'About Us', href: '#about' },
        { text: 'Contact', href: '#contact' }
    ];

    const services = [
        { text: 'Ultra Detail', href: '#pricing' },
        { text: 'Luxury Detail', href: '#pricing' },
        { text: 'Super Detail', href: '#pricing' },
        { text: 'Dent Removal', href: '#pricing' },
        { text: 'Ceramic Coating', href: '#pricing' }
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
                                    <a href={link.href}>{link.text}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h3 className="footer-title">Services</h3>
                        <ul className="footer-links">
                            {services.map((service, index) => (
                                <li key={index}>
                                    <a href={service.href}>{service.text}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h3 className="footer-title">Contact & Hours</h3>
                        <ul className="footer-contact-list">
                            <li>555 W Bonita Ave, San Dimas, CA 91773, United States</li>
                            <li>(909) 592-9666</li>
                            <li>
                                Mon - Sat: 8:00 AM - 6:00 PM<br />
                                Sunday: 9:00 AM - 5:00 PM
                            </li>
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