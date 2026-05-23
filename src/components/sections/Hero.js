import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';
import { openBookingForm } from '../utils/booking';

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="main-container">
                <div className="hero-content">
                    <span className="eyebrow">Premium Hand Detail</span>
                    <h1>Premium Car Wash & Detailing</h1>
                    <p className="hero-subtitle">Deep-clean finish, mirror-like shine, and trusted care your vehicle deserves. Reserve your slot in under 60 seconds.</p>
                    <div className="hero-buttons">
                        <button 
                            className="btn btn-primary"
                            onClick={() => openBookingForm()}
                        >
                            Buy Package Now
                        </button>
                        <Link to="/services" className="btn btn-outline">View Services</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero; 