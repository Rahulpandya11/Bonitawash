import React from 'react';
import './Services.css';
import { openBookingForm } from '../../utils/booking';
import {
    A_LA_CARTE_SERVICES,
    PRICE_DISCLAIMER,
    RAIN_GUARANTEE,
    SERVICE_PACKAGES,
    WALK_IN_NOTE,
    WEEKDAY_DEALS,
    weekdayDealOption
} from '../../constants/siteData';

const Services = () => {
    return (
        <section className="services" id="services">
            <div className="main-container">
                <div className="walk-in-banner">
                    <i className="fas fa-walking"></i>
                    <p>{WALK_IN_NOTE}</p>
                </div>

                <div className="weekday-deals">
                    <div className="weekday-deals-header">
                        <h2>{WEEKDAY_DEALS.title}</h2>
                        <span>{WEEKDAY_DEALS.days}</span>
                    </div>
                    <div className="weekday-deals-grid">
                        {WEEKDAY_DEALS.deals.map((deal) => (
                            <button
                                type="button"
                                className="weekday-deal bookable"
                                key={deal.name}
                                onClick={() => openBookingForm(weekdayDealOption(deal))}
                            >
                                <span className="item-name">{deal.name}</span>
                                {deal.note && <span className="item-note">{deal.note}</span>}
                                <div className="weekday-deal-price">
                                    {deal.originalPrice && <s>{deal.originalPrice}</s>}
                                    <strong>{deal.price}</strong>
                                </div>
                                <span className="weekday-deal-cta">Book This Deal</span>
                            </button>
                        ))}
                    </div>
                </div>

                <div className="rain-guarantee">
                    <i className="fas fa-cloud-rain"></i>
                    <div>
                        <h3>{RAIN_GUARANTEE.title}</h3>
                        <p>{RAIN_GUARANTEE.description}</p>
                    </div>
                </div>

                <h2 className="section-title">Professional Car Wash Packages</h2>
                <div className="services-grid">
                    {SERVICE_PACKAGES.map((pkg, index) => (
                        <div className="service-card bookable" key={index} onClick={() => openBookingForm(pkg.title)}>
                            <div className="service-header">
                                <h3>{pkg.title}</h3>
                                <div className="price-tag">{pkg.price}*</div>
                            </div>
                            <ul className="service-features">
                                {pkg.features.map((feature, fIndex) => (
                                    <li key={fIndex}>
                                        <i className="fas fa-check"></i> {feature}
                                    </li>
                                ))}
                            </ul>
                            <button className="book-package-btn">Book This Package</button>
                        </div>
                    ))}
                </div>

                <div className="ala-carte-section">
                    <h2 className="section-title">A La Carte Services</h2>
                    <div className="ala-carte-grid">
                        {A_LA_CARTE_SERVICES.map((item, index) => (
                            <div className="ala-carte-item bookable" key={index} onClick={() => openBookingForm(item.name)}>
                                <div className="ala-carte-copy">
                                    <span className="item-name">{item.name}</span>
                                    {item.note && <span className="item-note">{item.note}</span>}
                                </div>
                                <div className="ala-carte-actions">
                                    <span className="item-price">{item.price}</span>
                                    <button className="book-item-btn">Book</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <p className="price-disclaimer">{PRICE_DISCLAIMER}</p>
            </div>
        </section>
    );
};

export default Services;
