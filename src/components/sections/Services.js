import React from 'react';
import './Services.css';
import { openBookingForm } from '../../utils/booking';
import { A_LA_CARTE_SERVICES, SERVICE_PACKAGES } from '../../constants/siteData';

const Services = () => {
    const handleBookPackage = (packageName) => {
        openBookingForm(packageName);
    };

    return (
        <section className="services" id="services">
            <div className="main-container">
                <h2 className="section-title">Professional Car Wash Packages</h2>
                <div className="services-grid">
                    {SERVICE_PACKAGES.map((pkg, index) => (
                        <div className="service-card" key={index}>
                            <div className="service-header">
                                <h3>{pkg.title}</h3>
                                <div className="price-tag">{pkg.price}</div>
                            </div>
                            <ul className="service-features">
                                {pkg.features.map((feature, fIndex) => (
                                    <li key={fIndex}>
                                        <i className="fas fa-check"></i> {feature}
                                    </li>
                                ))}
                            </ul>
                            <button 
                                className="book-package-btn"
                                onClick={() => handleBookPackage(pkg.title)}
                            >
                                Book This Package
                            </button>
                        </div>
                    ))}
                </div>

                <div className="ala-carte-section">
                    <h2 className="section-title">A La Carte Services</h2>
                    <div className="ala-carte-grid">
                        {A_LA_CARTE_SERVICES.map((item, index) => (
                            <div className="ala-carte-item" key={index}>
                                <span className="item-name">{item.name}</span>
                                <span className="item-price">{item.price}</span>
                                <button 
                                    className="book-item-btn"
                                    onClick={() => handleBookPackage(item.name)}
                                >
                                    Book
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
