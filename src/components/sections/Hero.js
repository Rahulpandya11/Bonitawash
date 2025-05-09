import React from 'react';
import './Hero.css';
import { openBookingForm } from '../utils/booking';

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="main-container">
                <div className="hero-content">
                    <h1>Premium Car Wash & Detailing</h1>
                    <p className="hero-subtitle">Expert detailing, quick service, and long-lasting protection for your vehicle.</p>
                    <div className="hero-buttons">
                        <button 
                            className="btn btn-primary"
                            onClick={() => openBookingForm()}
                        >
                            Book a Wash Now
                        </button>
                        <a href="#services" className="btn btn-outline">View Services</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero; 