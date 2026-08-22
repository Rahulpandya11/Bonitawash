import React from 'react';
import { Link } from 'react-router-dom';
import './Testimonials.css';
import DomeGallery from './DomeGallery';
import { GOOGLE_PROFILE_REVIEWS } from '../../constants/siteData';

const Testimonials = () => {
    return (
        <section className="testimonials">
            <div className="testimonials-container">
                <div className="testimonials-text">
                    <h1>Make Your Car Look Brand New!</h1>
                    <div className="review-section">
                        <span className="review-label">EXCELLENT</span>
                        <div className="stars">
                            {[...Array(5)].map((_, i) => (
                                <i key={i} className="fas fa-star"></i>
                            ))}
                        </div>
                        <a href="https://share.google/GywTiX2meFbm0Rh9R" target="_blank" rel="noopener noreferrer" className="review-info-link">
                            <div className="review-info">
                                <span className="review-count">447 reviews</span>
                                <img src="/images/google.jpeg" alt="Google" className="google-logo" />
                            </div>
                        </a>
                    </div>
                    
                    {/* Description only visible on desktop */}
                    <div className="service-description">
                        <p>
                            Here at <span className="highlight">Bonita Car Wash</span>, our team doesn't just vacuum and wash 
                            vehicles — we <span className="highlight">restore, protect, and polish</span> them. Our expert 
                            detailing service guarantees to restore your vehicle to a like new or 
                            better than new condition. Whatever your needs may be, we are 
                            equipped with specialized tools and innovative methods to deliver 
                            results that go beyond your expectations. Get in touch with us today, 
                            and see how we can provide services at our shop or at your doorstep.
                        </p>
                    </div>

                </div>
                
                <div className="google-dome-container">
                    <h2 className="google-dome-title">Google Reviews</h2>
                    <a
                        href="https://share.google/MHwVD8p9wDkoAGBwS"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="google-dome-link"
                    >
                        View on Google
                    </a>
                    <div className="google-dome-gallery">
                        <DomeGallery
                            images={GOOGLE_PROFILE_REVIEWS}
                            fit={0.6}
                            fitBasis="min"
                            minRadius={1000}
                            maxRadius={1600}
                            padFactor={0.18}
                            overlayBlurColor="#07131f"
                            maxVerticalRotationDeg={17}
                            dragSensitivity={19}
                            segments={26}
                            dragDampening={2.4}
                            imageBorderRadius="16px"
                            grayscale={false}
                        />
                    </div>
                    <div className="team-image team-image--compact">
                        <img src="/images/testomorinal.jpg" alt="Our Team" />
                    </div>
                    <div className="since-text">
                        <i className="fas fa-heart"></i>
                        <span>Your Local Detailing Choice Since 2008</span>
                    </div>
                </div>

                {/* Button moved outside of service-description for mobile */}
                <Link to="/services" className="service-button">
                    Choose Your Service Below <i className="fas fa-chevron-down"></i>
                </Link>

                <div className="services-list">
                    {[
                        'Wheel Polish',
                        'Interior Shampoo',
                        'Complete Dressing',
                        'Clay Treatment',
                        'Carnauba Paste Wax',
                        '100% Hand Wash'
                    ].map((service, index) => (
                        <div key={index} className="service-item">
                            <i className="fas fa-check"></i>
                            <span>{service}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials; 
