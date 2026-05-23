import React, { useState } from 'react';
import './Pricing.css';
import { openBookingForm } from '../utils/booking';
import { SERVICES } from '../../constants/booking';
import { DETAILING_PLANS } from '../../constants/siteData';

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
                <h2 className="section-title">Our Packages</h2>
                <div className="pricing-grid">
                    {pricingPlans.map((plan, index) => (
                        <div 
                            className={`pricing-card ${selectedPlan === index ? 'selected' : ''} ${(selectedPlan === null || selectedPlan === 1) && plan.featured ? 'featured' : ''}`} 
                            key={index}
                            onClick={() => handlePlanSelect(index)}
                        >
                            <h3>{plan.name}</h3>
                            <div className="price">{plan.price}</div>
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
                <p className="price-note">* PRICE MAY VARY DUE TO THE CONDITION OR SIZE OF VEHICLE</p>
                <div className="additional-service">
                    <h4>PAINLESS WASHING, DETAILING & POLISHING</h4>
                    <p>FREE QUOTE - Contact us for details</p>
                </div>
            </div>
        </section>
    );
};

export default Pricing; 