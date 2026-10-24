import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';
import { openBookingForm } from '../utils/booking';
import { WALK_IN_NOTE } from '../../constants/siteData';

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="main-container">
                <div className="hero-content">
                    <span className="eyebrow">Premium Hand Detail</span>
                    <h1>Premium Car Wash & Detailing</h1>
                    <p className="hero-subtitle">Deep-clean finish, mirror-like shine, and trusted care for drivers in San Dimas, Diamond Bar and nearby. Walk in for a wash anytime, or reserve a detail in under 60 seconds.</p>
                    <div className="hero-buttons">
                        <button 
                            className="btn btn-primary"
                            onClick={() => openBookingForm()}
                        >
                            Book a Detail
                        </button>
                        <Link to="/detailing" className="btn btn-outline">View Detail Packages</Link>
                    </div>
                    <p className="hero-walk-in"><i className="fas fa-walking"></i> {WALK_IN_NOTE}</p>
                </div>
            </div>
        </section>
    );
};

export default Hero; 