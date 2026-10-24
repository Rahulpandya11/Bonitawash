import React, { useState } from 'react';
import './Pricing.css';
import './Services.css';
import { openBookingForm } from '../utils/booking';
import { SERVICES } from '../../constants/booking';
import { DETAIL_A_LA_CARTE, DETAILING_PLANS, PRICE_DISCLAIMER } from '../../constants/siteData';

const Pricing = () => {
    const [selectedPlan, setSelectedPlan] = useState(null);

    const pricingPlans = DETAILING_PLANS.map((plan) => ({
        ...SERVICES[plan.serviceKey],
        features: plan.features,
        featured: plan.featured
    }));

    const handlePlanSelect = (index) => {
        setSelectedPlan(index);
    };

    const handleBooking = (e, plan) => {
        e.stopPropagation();
        openBookingForm(plan.name);
    };

    return (
        <section className="pricing" id="pricing">
            <div className="main-container">
                <h2 className="section-title">Detail Packages</h2>
                <div className="pricing-grid">
                    {pricingPlans.map((plan, index) => (
                        <div 
                            className={`pricing-card ${selectedPlan === index ? 'selected' : ''} ${(selectedPlan === null || selectedPlan === 1) && plan.featured ? 'featured' : ''}`} 
                            key={index}
                            onClick={() => handlePlanSelect(index)}
                        >
                            <h3>{plan.name}</h3>
                            <div className="price">{plan.price}*</div>
                            <ul className="pricing-features">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx}>{feature}</li>
                                ))}
                            </ul>
                            <button 
                                className="btn btn-primary"
                                onClick={(e) => handleBooking(e, plan)}
                            >
                                Book This Package
                            </button>
                        </div>
                    ))}
                </div>
                <div className="ala-carte-section detail-ala-carte">
                    <h2 className="section-title">A La Carte Detail</h2>
                    <div className="ala-carte-grid">
                        {DETAIL_A_LA_CARTE.map((item) => (
                            <div className="ala-carte-item" key={item.name}>
                                <div className="ala-carte-copy">
                                    <span className="item-name">{item.name}</span>
                                    {item.note && <span className="item-note">{item.note}</span>}
                                </div>
                                <div className="ala-carte-actions">
                                    <span className="item-price">{item.price}</span>
                                    <button
                                        className="book-item-btn"
                                        onClick={(e) => handleBooking(e, item)}
                                    >
                                        Book
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <p className="price-note">{PRICE_DISCLAIMER}</p>
                <div className="additional-service">
                    <h4>PAINLESS WASHING, DETAILING & POLISHING</h4>
                    <p>FREE QUOTE - Contact us for details</p>
                </div>
            </div>
        </section>
    );
};

export default Pricing; 