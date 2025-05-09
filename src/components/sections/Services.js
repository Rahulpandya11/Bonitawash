import React from 'react';
import './Services.css';

const Services = () => {
    const services = [
        {
            icon: 'fas fa-car',
            title: 'Basic Wash',
            description: 'Exterior wash and dry with premium cleaning products to remove dirt and grime.'
        },
        {
            icon: 'fas fa-spa',
            title: 'Premium Detailing',
            description: 'Full interior and exterior cleaning with waxing and interior conditioning.'
        },
        {
            icon: 'fas fa-oil-can',
            title: 'Polishing',
            description: 'Leather treatment and Polishing to restore both your car’s interior comfort and its exterior finish.'
        }
    ];

    return (
        <section className="services" id="services">
            <div className="main-container">
                <h2 className="section-title">Our Services</h2>
                <div className="services-grid">
                    {services.map((service, index) => (
                        <div className="service-card" key={index}>
                            <div className="service-icon">
                                <i className={service.icon}></i>
                            </div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services; 