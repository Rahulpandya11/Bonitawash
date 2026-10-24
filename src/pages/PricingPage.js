import React from 'react';
import Pricing from '../components/sections/Pricing';
import PageHero from '../components/layout/PageHero';
import '../components/sections/Services.css';
import {
    DIAMOND_BAR,
    PREMIUM_WASH_TITLES,
    PRICE_DISCLAIMER,
    SERVICE_PACKAGES,
    WALK_IN_NOTE
} from '../constants/siteData';

const premiumWashes = SERVICE_PACKAGES.filter((pkg) => PREMIUM_WASH_TITLES.includes(pkg.title));

const PricingPage = () => {
    return (
        <>
            <PageHero
                title="Premium Auto Detailing in San Dimas & Diamond Bar"
                subtitle="Full detail packages and a la carte services, from clay, buff & wax to Ceramic Pro coating. Reserve your slot through our booking form."
                ctaText="Book A Detail"
                secondaryText="Contact Team"
                secondaryPath="/contact"
            />
            <Pricing />
            <section className="services diamond-bar-section">
                <div className="main-container">
                    <h2 className="section-title">{DIAMOND_BAR.title}: Premium Hand Washes</h2>
                    <div className="walk-in-banner">
                        <i className="fas fa-map-marker-alt"></i>
                        <p>{DIAMOND_BAR.subtitle} {WALK_IN_NOTE}</p>
                    </div>
                    <div className="services-grid">
                        {premiumWashes.map((pkg) => (
                            <div className="service-card" key={pkg.title}>
                                <div className="service-header">
                                    <h3>{pkg.title}</h3>
                                    <div className="price-tag">{pkg.price}*</div>
                                </div>
                                <ul className="service-features">
                                    {pkg.features.map((feature) => (
                                        <li key={feature}>
                                            <i className="fas fa-check"></i> {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <p className="price-disclaimer">{PRICE_DISCLAIMER}</p>
                </div>
            </section>
        </>
    );
};

export default PricingPage;
