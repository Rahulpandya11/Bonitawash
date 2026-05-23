import React from 'react';
import './StickyBookingBar.css';
import { openBookingForm } from '../../utils/booking';
import { SERVICES } from '../../constants/booking';

const quickPackages = [
    SERVICES.SUPER_DETAIL,
    SERVICES.LUXURY_DETAIL,
    SERVICES.ULTRA_DETAIL
];

const StickyBookingBar = () => {
    return (
        <aside className="sticky-booking" aria-label="Quick package booking">
            <div className="sticky-booking-content">
                <p className="sticky-title">Ready for showroom shine?</p>
                <div className="sticky-actions">
                    {quickPackages.map((plan) => (
                        <button
                            key={plan.name}
                            className="sticky-package-btn"
                            onClick={() => openBookingForm(plan.name)}
                        >
                            <span>{plan.name}</span>
                            <strong>{plan.price}</strong>
                        </button>
                    ))}
                </div>
            </div>
        </aside>
    );
};

export default StickyBookingBar;
