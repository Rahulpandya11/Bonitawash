import React from 'react';
import './Testimonials.css';

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
                        <div className="review-info">
                            <span className="review-count">447 reviews</span>
                            <img src="/images/google.jpeg" alt="Google" className="google-logo" />
                        </div>
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
                
                <div className="team-image-container">
                    <div className="team-image">
                        <img src="/images/About-us.jpg" alt="Our Team" />
                    </div>
                    <div className="since-text">
                        <i className="fas fa-heart"></i>
                        <span>Your Local Detailing Choice Since 2008</span>
                    </div>
                </div>

                {/* Button moved outside of service-description for mobile */}
                <button className="service-button">
                    Choose Your Service Below <i className="fas fa-chevron-down"></i>
                </button>

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