import React from 'react';
import { Link } from 'react-router-dom';
import { openBookingForm } from '../../utils/booking';

const PageHero = ({ title, subtitle, ctaText = 'Book Now', secondaryText, secondaryPath }) => {
    return (
        <section className="page-hero">
            <div className="main-container">
                <div className="page-hero-content">
                    <p className="eyebrow">Bonita Carwash</p>
                    <h1>{title}</h1>
                    <p>{subtitle}</p>
                    <div className="page-hero-actions">
                        <button className="btn btn-primary" onClick={() => openBookingForm()}>
                            {ctaText}
                        </button>
                        {secondaryText && secondaryPath && (
                            <Link className="btn btn-outline" to={secondaryPath}>
                                {secondaryText}
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PageHero;
