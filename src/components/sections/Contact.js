import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the form data to your backend
        console.log('Form submitted:', formData);
        // Reset form
        setFormData({
            name: '',
            email: '',
            phone: '',
            service: '',
            message: ''
        });
    };

    return (
        <section className="contact" id="contact">
            <div className="main-container">
                <h2 className="section-title">Contact Us</h2>
                <div className="contact-content">
                    <div className="contact-info">
                        <div className="info-item">
                            <i className="fas fa-map-marker-alt"></i>
                            <div>
                                <h3>Location</h3>
                                <p>555 W Bonita Ave,San Dimas,<br /> CA 91773, United States</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <i className="fas fa-phone"></i>
                            <div>
                                <h3>Phone</h3>
                                <p><a href="tel:9095929666">(909) 592-9666</a></p>
                                <p>Monday - Sunday: 8AM - 6PM</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <i className="fas fa-clock"></i>
                            <div>
                                <h3>Hours</h3>
                                <p>Mon - Sat: 8:00 AM - 6:00 PM<br />Sunday: 9:00 AM - 5:00 PM</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <i className="fas fa-envelope"></i>
                            <div>
                                <h3>Email</h3>
                                <p><a href="mailto:info@bonitacarwash.com">bonitacarwash27x7@gmail.com</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="contact-form">
                        <h3>Send us a Message</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Your Email"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Your Phone"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <select
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Select a service</option>
                                    <option value="ultra">Ultra Detail - $300</option>
                                    <option value="luxury">Luxury Detail - $250</option>
                                    <option value="super">Super Detail - $200</option>
                                    <option value="Wax">Polishing</option>
                                    <option value="other">Other Service</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Your Message"
                                    required
                                    rows="5"
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Send Message</button>
                        </form>
                    </div>
                </div>
                <div className="map-section">
                    <h3>Find Us</h3>
                    <div className="map-container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d825.8837409022418!2d-117.81702419999998!3d34.1070518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c32f398447d5c9%3A0x8ecfb1f0c9b5546!2sBonita%20Car%20Wash!5e0!3m2!1sen!2sin!4v1744294984796!5m2!1sen!2sin"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Bonita Carwash Location"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact; 
